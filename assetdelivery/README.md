## Asset Proxy

This is the asset proxy script needed for actually downloading assets, for the renderer & the RCC to actually render the asset.

Without an asset proxy, you will not be able to download any Roblox assets from the admin panel so the item's render will turn out as a blank image (shows nothing at all).

## How to setup

It's really simple. You first need to initialize the dependencies that it needs to run. To do this, run the command `npm i`.
Then once it's finished, run the command `node proxy.js`.
It will also automatically run when you open the `runall.bat` batch file.

## Information
You must enter your cookie in the const where it says "ROBLOX_COOKIE". Just enter your Roblox cookie in there and you should be good.

Now, the asset proxy script is in it's first stages. It isn't so good. I'm still working on it.
But, it works.