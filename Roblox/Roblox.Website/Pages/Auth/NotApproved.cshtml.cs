using Microsoft.AspNetCore.Mvc;
using Roblox.Website.Controllers;

namespace Roblox.Website.Pages;

// The ban page now lives in the 2016 frontend at /notapproved, this just forwards old links to it.
public class NotApproved : RobloxPageModel
{
    public IActionResult OnGet() => Redirect("/notapproved");

    public IActionResult OnPost() => Redirect("/notapproved");
}
