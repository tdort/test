using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Net.Http;
using System.Net.Http.Json;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using System.Net;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Roblox.Exceptions;
using Roblox.Logging;
using Roblox.Models.Users;
using Roblox.Services;
using Roblox.Services.App.FeatureFlags;
using Roblox.Website.Middleware;
using BadRequestException = Roblox.Exceptions.BadRequestException;
using MVC = Microsoft.AspNetCore.Mvc;
using Roblox.Services.Exceptions;
using Roblox.Website.WebsiteModels.Discord;
using Npgsql;
using Dapper;
using Roblox.Dto.Users;


namespace Roblox.Website.Controllers 
{
    [MVC.ApiController]
    [MVC.Route("/")]
    public class MobileShitTesting : ControllerBase 
    {
		[HttpGetBypass("/mobileapi/check-app-version")]
        [HttpPostBypass("/mobileapi/check-app-version")]
		public MVC.IActionResult MobileCheckAppVer()
		{
			return Ok(new
			{
				data = new
				{
					UpgradeAction = "None"
				}
			});
		}
		
		[HttpGetBypass("/device/initialize")]
        [HttpPostBypass("/device/initialize")]
        public MVC.IActionResult InitDevice()
        {
            return Ok(new
            {
                browserTrackerId = 1,
                appDeviceIdentifier = (string?)null,
            });
        }
		
		private async Task RateLimitCheck()
		{
			var loginKey = "LoginAttemptCountV1:" + GetIP();
			var attemptCount = (await services.cooldown.GetBucketDataForKey(loginKey, TimeSpan.FromMinutes(10))).ToArray();

			if (!await services.cooldown.TryIncrementBucketCooldown(loginKey, 15, TimeSpan.FromMinutes(10), attemptCount, true))
			{
				throw new ForbiddenException(15, "Too many attempts, please wait about 10 minutes before retrying!");
			}
		}
		
		public class MobileLoginReq
		{
			public string username { get; set; }
			public string password { get; set; }
		}
		
		// The 2016 iOS app posts "username=..&password=.." (form) to /login/v1/; JSON is accepted too.
		private async Task<(string? username, string? password)> ReadMobileCredentials()
		{
			if (Request.HasFormContentType)
				return (Request.Form["username"].ToString(), Request.Form["password"].ToString());
			using var reader = new StreamReader(Request.Body);
			var body = await reader.ReadToEndAsync();
			try
			{
				var parsed = JsonConvert.DeserializeObject<MobileLoginReq>(body);
				return (parsed?.username, parsed?.password);
			}
			catch
			{
				return (null, null);
			}
		}

		[HttpPostBypass("mobileapi/login")]
		public Task<dynamic> MobileLogin() => DoMobileLogin();

		[HttpPostBypass("login/v1")]
		public Task<dynamic> MobileLoginV1() => DoMobileLogin();

		private static object MobileUserInfo(string username, long userId, long robux, long tickets) => new
		{
			UserName = username,
			RobuxBalance = robux,
			TicketsBalance = tickets,
			IsAnyBuildersClubMember = true,
			ThumbnailUrl = $"{Configuration.BaseUrl}/Thumbs/Avatar.ashx?userId={userId}",
			UserID = userId
		};

		[HttpGetBypass("my/balance")]
		public async Task<dynamic> MyBalance()
		{
			var session = userSession;
			Console.WriteLine($"[my/balance] session={(session == null ? "NONE" : session.userId.ToString())} hasCookie={Request.Cookies.ContainsKey(".ROBLOSECURITY")}");
			if (session == null) return StatusCode(401, new { errors = new[] { new { code = 0, message = "Authorization has been denied for this request." } } });
			var bal = await services.economy.GetUserBalance(session.userId);
			return new { robux = bal.robux, tickets = bal.tickets };
		}

		[HttpGetBypass("mobileapi/userinfo")]
		[HttpPostBypass("mobileapi/userinfo")]
		public async Task<dynamic> MobileUserInfoEndpoint()
		{
			var session = userSession;
			if (session == null) return StatusCode(401, new { Status = "Error", Message = "Not logged in" });
			var info = await services.users.GetUserById(session.userId);
			var bal = await services.economy.GetUserBalance(session.userId);
			return MobileUserInfo(info.username, session.userId, bal.robux, bal.tickets);
		}

		private async Task<dynamic> DoMobileLogin()
		{
			var (username, password) = await ReadMobileCredentials();
			// debug: shows what the app really sent (no password text, only its length)
			Console.WriteLine($"[mobile-login] cookies={Request.Headers.Cookie.Count} ct={Request.ContentType} form={Request.HasFormContentType} user='{username}' passLen={password?.Length ?? -1}");
			FeatureFlags.FeatureCheck(FeatureFlag.LoginEnabled);
			await RateLimitCheck();

			if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
				throw new BadRequestException(3, "Username and Password are required. Please try again.");

			UserInfo userInfo;
			try
			{
				userInfo = await services.users.GetUserByNameIgnoreCase(username.Trim()); // iOS keyboards lowercase the first letter
			}
			catch (RecordNotFoundException)
			{
				throw new ForbiddenException(1, "Incorrect username or password. Please try again.");
			}

			if (await Login(username, password, userInfo.userId))
				await CreateSessionAndSetCookie(userInfo.userId);

			var userBalance = await services.economy.GetUserBalance(userInfo.userId);

			Console.WriteLine($"[mobile-login] OK user={userInfo.userId} -> returning 200 + Set-Cookie");
			// The v1 login parser reads several differently-named fields across app versions, so return all of them.
			var info = MobileUserInfo(userInfo.username, userInfo.userId, userBalance.robux, userBalance.tickets);
			var now = DateTime.UtcNow;
			return new Dictionary<string, object?>
			{
				["Status"] = "OK",
				["UserInfo"] = info,
				["Username"] = userInfo.username,
				["UserName"] = userInfo.username,
				["UserID"] = userInfo.userId,
				["UserId"] = userInfo.userId,
				["HasPasswordSet"] = true,
				["Email"] = "",
				["LastSuccessfulLoginDate"] = now.ToString("o"),
				["LastSuccessfulLoginExpectedExpiration"] = now.AddDays(364).ToString("o"),
				["RobuxBalance"] = userBalance.robux,
				["TicketsBalance"] = userBalance.tickets,
				["tickets"] = userBalance.tickets,
				["IsAnyBuildersClubMember"] = true,
				["ThumbnailUrl"] = $"{Configuration.BaseUrl}/Thumbs/Avatar.ashx?userId={userInfo.userId}",
			};
		}

		private async Task<bool> Login(string username, string password, long userId)
		{
			try
			{
				FeatureFlags.FeatureCheck(FeatureFlag.LoginEnabled);
			}
			catch (RobloxException)
			{
				throw new RobloxException(503, 0, "Login is currently disabled. Please try again later.");
			}
			// (rate limit already checked in DoMobileLogin)
			try
			{
				if (!await services.users.VerifyPassword(userId, password))
					throw new ForbiddenException(1, "Incorrect username or password. Please try again");
			}
			catch (RecordNotFoundException)
			{
				throw new ForbiddenException(4, "Your account has been locked. Please reset your password to unlock your account.");
			}

			return true;
		}
		
		// ".zaplix.xyz" so the cookie is shared by www./api./m./chat. hosts the app talks to
		private static string? MobileCookieDomain()
		{
			try
			{
				var host = new Uri(Configuration.BaseUrl.Contains("://") ? Configuration.BaseUrl : "http://" + Configuration.BaseUrl).Host;
				if (host.StartsWith("www.")) host = host.Substring(4);
				if (host == "localhost" || System.Net.IPAddress.TryParse(host, out _)) return null;
				return "." + host;
			}
			catch { return null; }
		}

		private async Task<string> CreateSessionAndSetCookie(long userId)
		{
			var sessionCookie = Middleware.SessionMiddleware.CreateJwt(new Middleware.JwtEntry()
			{
				sessionId = await services.users.CreateSession(userId),
				createdAt = DateTimeOffset.Now.ToUnixTimeSeconds(),
			});

			HttpContext.Response.Cookies.Append(Middleware.SessionMiddleware.CookieName, sessionCookie, new CookieOptions()
			{
				Domain = MobileCookieDomain(),
				Secure = false,
				Expires = DateTimeOffset.Now.Add(TimeSpan.FromDays(364)),
				IsEssential = true,
				Path = "/",
				SameSite = SameSiteMode.Lax,
			});
			return sessionCookie;
		}
	}
}	