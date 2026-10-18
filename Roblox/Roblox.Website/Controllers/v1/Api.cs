using Microsoft.AspNetCore.Mvc;

namespace Roblox.Website.Controllers;

[ApiController]
[Route("/apisite/api")]
public class ApiController : ControllerBase
{

    [HttpGet("users/get-by-username")]
    public async Task<dynamic> GetUserByUsername(string username)
    {
        var result = (await services.users.MultiGetUsersByUsername(new[] { username })).ToList();
        if (result.Count == 0) return new { success = false, errorMessage = "User not found" };
        var user = result[0];
        return new
        {
            Id = user.id,
            Username = user.name,
            AvatarUri = (string?)null,
            AvatarFinal = false,
            IsOnline = false,
        };
    }

    [HttpGet("users/{userId:long}")]
    public async Task<dynamic> GetUserById(long userId)
    {
        var result = await services.users.GetUserById(userId);
        return new
        {
            Id = result.userId,
            Username = result.username,
            AvatraUri = (string?)null,
            AvatarFile = false,
            IsOnline = false,
        };
    }

    [HttpGet("v1/countries/phone-prefix-list")]
    public dynamic GetCountries()
    {
        return new List<dynamic>()
        {
            new
            {
                name = "United States",
                code = "US",
                prefix = "1",
                localizedName = "United States",
            },
            // from services/api/src/controllers/proxy/v1/Api.ts:38
            new
            {
                name = "Jongus",
                code = "JS",
                prefix = "12",
                localizedName = "JongusLand",
            }
        };
    }

    [HttpGet("marketplace/productinfo")]
    public async Task<dynamic> GetProductInfo(long assetId)
    {
        var details = await services.assets.GetAssetCatalogInfo(assetId);
        return new
        {
            TargetId = details.id,
            AssetId = details.id,
            ProductId = details.id,
            Name = details.name,
            Description = details.description,
            AssetTypeId = (int)details.assetType,
            IsForSale = details.isForSale,
            IsPublicDomain = details.isForSale && details.price == 0,
            Creator = new
            {
                Id = details.creatorTargetId,
                Name = details.name,
            },
        };
    }

    [HttpGet("site/2020-public")]
    public async Task<dynamic> GetSite2020Public()
    {
        return new { enabled = await services.users.GetSite2020Public() };
    }

    [HttpPost("site/2020-public")]
    public async Task<dynamic> SetSite2020Public([Microsoft.AspNetCore.Mvc.FromBody] Site2020PublicRequest request)
    {
        if (userSession.userId != 1) throw new Roblox.Services.Exceptions.RobloxException(403, 0, "Forbidden");
        await services.users.SetSite2020Public(request.enabled);
        return new { enabled = request.enabled };
    }

    [HttpGet("alerts/alert-info")]
    public async Task<dynamic> GetAlert()
    {
        var alert = await services.users.GetGlobalAlert();
        return new
        {
            IsVisible = alert != null,
            Text = alert?.message ?? "",
            LinkText = "",
            LinkUrl = alert?.url ?? "",
        };
    }
	
	[HttpGet("v1/items/restrictions")]
    public async Task<dynamic> GetItemRestrictions(string assetIds)
    {
        var ids = assetIds.Split(",").Select(long.Parse).ToArray();
        return await services.assets.MultiGetAssetRestrictions(ids);
    }
}

public class Site2020PublicRequest
{
    public bool enabled { get; set; }
}
