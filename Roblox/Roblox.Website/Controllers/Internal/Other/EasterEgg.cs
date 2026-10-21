using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Roblox.Services.Exceptions;
using Roblox.Website.Middleware;
using MVC = Microsoft.AspNetCore.Mvc;

namespace Roblox.Website.Controllers
{
	// Hidden easter egg: awards a badge and lets the user join one secret, 1-player place that can't be joined any other way.
	[MVC.ApiController]
	[MVC.Route("/")]
	public class EasterEggController : ControllerBase
	{
		[HttpGetBypass("easter-egg/enter")]
		public async Task<dynamic> EnterEasterEgg()
		{
			var session = userSession;
			if (session == null || session.userId <= 0)
				return StatusCode(401, new { success = false });

			var egg = await services.games.GetEasterEgg();
			if (egg == null)
				return NotFound(new { success = false });

			var (placeId, badgeId) = egg.Value;
			if (badgeId > 0)
				await services.users.GiveUserBadge(session.userId, badgeId);

			await services.games.SetMaxPlayerCount(placeId, 1);
			await services.games.GrantEggPass(session.userId, placeId);
			var year = await services.games.GetPlaceYear(placeId) ?? 2016;
			return new { success = true, placeId, year };
		}
	}
}
