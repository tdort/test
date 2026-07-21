-- i love lua

local assetUrl, fileExtension, x, y, baseUrl = ...

local ThumbnailGenerator = game:GetService("ThumbnailGenerator")
local InsertService = game:GetService("InsertService")
local Players = game:GetService("Players")

pcall(function() game:GetService("ContentProvider"):SetBaseUrl(baseUrl) end)
game:GetService("ScriptContext").ScriptsDisabled = true
game:GetService("UserInputService").MouseIconEnabled = false

local function extractAnimIdFromContainer(container)
    if not container then
        return nil
    end
    local found = container:FindFirstChildOfClass("Animation", true)
    if found and found.AnimationId and found.AnimationId ~= "" then
        return found.AnimationId
    end
    return nil
end

local function loadAnimationId(url)
    local id = tostring(url):match("id=(%d+)") or tostring(url):match("%D(%d+)$")
    if not id then
        return nil
    end
    local ok, asset = pcall(function()
        return InsertService:LoadAsset(tonumber(id))
    end)
    if not ok or not asset then
        return nil
    end
    local animId = extractAnimIdFromContainer(asset)
    pcall(function() asset:Destroy() end)
    return animId
end

local player = Players:CreateLocalPlayer(0)
local rig = InsertService:LoadLocalAsset("rbxasset://avatar/characterR15.rbxm")
if rig then
    if player.Character then
        player.Character:Destroy()
    end
    rig.Parent = workspace
    player.Character = rig
else
    player:LoadCharacterBlocking()
end

local humanoid = player.Character and player.Character:FindFirstChildOfClass("Humanoid")
local animId = loadAnimationId(assetUrl)
if animId and humanoid then
    local anim = Instance.new("Animation")
    anim.AnimationId = animId
    local ok, track = pcall(function()
        return humanoid:LoadAnimation(anim)
    end)
    if ok and track then
        track.Priority = Enum.AnimationPriority.Action
        track:Play()
        wait(0.25)
        if track.Length and track.Length > 0 then
            track.TimePosition = track.Length * 0.35
        end
        wait(0.05)
    end
end

local result, requestedUrls = ThumbnailGenerator:Click(fileExtension, x, y, true)
return result, requestedUrls