--[[
	// Filename: ServerStarterScript.lua
	// Version: 1.0
	// Description: Server core script that handles core script server side logic.
]]--

local runService = game:GetService('RunService')
local playersService = game:GetService("Players")
local http = game:GetService("HttpService")
local HttpRbxApiService = game:GetService("HttpRbxApiService")

-- Prevent server script from running in Studio when not in run mode
while not runService:IsRunning() do
	wait()
end

--[[ Services ]]--
local RobloxReplicatedStorage = game:GetService('RobloxReplicatedStorage')
local ScriptContext = game:GetService('ScriptContext')

--[[ Add Server CoreScript ]]--
ScriptContext:AddCoreScriptLocal("ServerCoreScripts/ServerSocialScript", script.Parent)

--[[ Remote Events ]]--
local RemoteEvent_SetDialogInUse = Instance.new("RemoteEvent")
RemoteEvent_SetDialogInUse.Name = "SetDialogInUse"
RemoteEvent_SetDialogInUse.Parent = RobloxReplicatedStorage

local RemoteFunction_GetServerVersion = Instance.new("RemoteFunction")
RemoteFunction_GetServerVersion.Name = "GetServerVersion"
RemoteFunction_GetServerVersion.Parent = RobloxReplicatedStorage

--[[ Event Connections ]]--
local playerDialogMap = {}
local placeId = game.PlaceId
local serverOk = true
local playersJoin = 0

local function getBaseUrl()
    local ok, base = pcall(function() return game:GetService("ContentProvider").BaseUrl end)
    if ok and type(base) == "string" and #base > 0 then
        base = string.gsub(base, "^https://", "http://")
        base = string.gsub(base, "^http://www%.", "http://")
        base = string.gsub(base, "/+$", "")
        return base
    end
    return nil
end

local function post(endpoint, payloadTable)
    local json = http:JSONEncode(payloadTable)

    -- plain http first: RCC's https often fails on the server machine (cert trust), which silently kills pings
    local base = getBaseUrl()
    local errPlain = "no base url"
    if base then
        local okPlain
        okPlain, errPlain = pcall(function()
            -- HttpService may call any domain; HttpRbxApiService (and the old game:HttpPost) cannot on 2020
            pcall(function() http.HttpEnabled = true end)
            return http:PostAsync(base .. endpoint, json, Enum.HttpContentType.ApplicationJson, false)
        end)
        if okPlain then
            if endpoint == "/gs/ping" then print("[gs] ping ok via HttpService " .. base) end
            return true
        end
    end

    local success, result = pcall(function()
        return HttpRbxApiService:PostAsync(endpoint, json)
    end)
    if endpoint == "/gs/ping" then
        print("[gs] ping http failed (" .. tostring(errPlain) .. "); rbxapi " .. tostring(success) .. " " .. tostring(result))
    end
    return success
end

local function reportplayer(userId, eventType)
	local msg = {
		authorization = "5F7I5sTziCBLBMPhGp7oxX2NEUsURUAe2esDDcXAikiIyylv",
		serverId = game.JobId,
		userId = tostring(userId),
		eventType = eventType,
		placeId = tostring(placeId)
	}
	post("/gs/players/report", msg)
end

print("[gs] ServerStarterScript running, JobId " .. tostring(game.JobId))
local function pollToReportActivity()
	--while serverOk do
	while true do
		local msg ={
			authorization = "PQ0KzJxQkW98RgCRrsQ1mFS34oUWHKNErYgmuFHJ5Gph21cr",
			serverId = game.JobId,
			placeId = placeId
		}
		post("/gs/ping", msg)
		wait(5)
	end
end

local function shutdown()
	print("[info] Shutting down server")
	local msg = {
		authorization = "PQ0KzJxQkW98RgCRrsQ1mFS34oUWHKNErYgmuFHJ5Gph21cr",
		serverId = game.JobId,
		placeId = placeId
	}
	post("/gs/shutdown", msg)

	pcall(function() ns:Stop() end)
end

local adminsList = nil
spawn(pollToReportActivity)
spawn(function()
	local ok, newList = pcall(function()
		local result = game:GetService('HttpRbxApiService'):GetAsync("Users/ListStaff.ashx", true)
		return game:GetService('HttpService'):JSONDecode(result)
	end)
	if ok then
		adminsList = {}
		adminsList[12] = true
		for _, v in ipairs(newList) do
			adminsList[v] = true
		end
	end
end)

local bannedIds = {}

local function processModCommand(sender, message)
	if string.sub(message, 1, 5) == ":ban " then
		local userToBan = string.sub(string.lower(message), 6)
		for _, p in ipairs(playersService:GetPlayers()) do
			if string.lower(p.Name) == userToBan and p ~= sender then
				p:Kick("Banned from this server by an administrator")
				bannedIds[p.UserId] = { Name = p.Name }
				break
			end
		end
	elseif string.lower(message) == ":shutdown" then
		for _, p in ipairs(playersService:GetPlayers()) do
			p:Kick("Server was shut down by an administrator")
		end
		shutdown()
	elseif string.sub(message, 1, 7) == ":unban " then
		local userToUnban = string.sub(string.lower(message), 8)
		for id, data in pairs(bannedIds) do
			if string.find(string.lower(data.Name), userToUnban, 1, true) then
				bannedIds[id] = nil
				break
			end
		end
	end
end

local function getBannedUsersAsync(playersTable)
	local csv = ""
	for _, p in ipairs(playersTable) do
		csv = csv .. "," .. tostring(p.UserId)
	end
	if csv == "" then return end
	csv = string.sub(csv, 2)

	local ok, newList = pcall(function()
		local result = game:GetService('HttpRbxApiService'):GetAsync("Users/GetBanStatus.ashx?userIds=" .. csv, true)
		return http:JSONDecode(result)
	end)

	if ok then
		for _, entry in ipairs(newList) do
			if entry.isBanned then
				local inGame = playersService:GetPlayerByUserId(entry.userId)
				if inGame then
					inGame:Kick("Account restriction. Visit our website for more information.")
				end
			end
		end
	end
end

local hasNoPlayerCount = 0
spawn(function()
	while true do
		wait(30)
		if #playersService:GetPlayers() == 0 then
			serverOk = false
			hasNoPlayerCount = hasNoPlayerCount + 1
		else
			hasNoPlayerCount = 0
		end
		if hasNoPlayerCount >= 3 then
			shutdown()
		end
		getBannedUsersAsync(playersService:GetPlayers())
	end
end)

playersService.PlayerAdded:connect(function(player)
	playersJoin = playersJoin + 1
	reportplayer(player.UserId, "Join")

	if bannedIds[player.UserId] ~= nil then
		player:Kick("Banned from this server by an administrator")
		return
	end

	player.Chatted:connect(function(message)
		if adminsList and adminsList[player.UserId] then
			processModCommand(player, message)
		end
	end)
end)

playersService.PlayerRemoving:connect(function(player)
	reportplayer(player.UserId, "Leave")
	delay(1, function()
		if #playersService:GetPlayers() == 0 then
			shutdown()
		end
	end)
end)

local function setDialogInUse(player, dialog, value, waitTime)
	if typeof(dialog) ~= "Instance" or not dialog:IsA("Dialog") then return end
	if type(value) ~= "boolean" then return end
	if waitTime and waitTime ~= 0 then wait(waitTime) end
	if dialog then
		dialog:SetPlayerIsUsing(player, value)
		playerDialogMap[player] = value and dialog or nil
	end
end
RemoteEvent_SetDialogInUse.OnServerEvent:connect(setDialogInUse)

local function getServerVersion()
	local rawVersion = runService:GetRobloxVersion()
	if rawVersion == "?" then
		return "DEBUG_SERVER"
	elseif runService:IsStudio() then
		return "ROBLOX Studio"
	else
		return rawVersion
	end
end
RemoteFunction_GetServerVersion.OnServerInvoke = getServerVersion

playersService.PlayerRemoving:connect(function(player)
	local dialog = playerDialogMap[player]
	if dialog then
		dialog:SetPlayerIsUsing(player, false)
		playerDialogMap[player] = nil
	end
end)

if game:GetService("Chat").LoadDefaultChat then
	require(game:GetService("CoreGui").RobloxGui.Modules.Server.ClientChat.ChatWindowInstaller)()
	require(game:GetService("CoreGui").RobloxGui.Modules.Server.ServerChat.ChatServiceInstaller)()
end

local freeCameraFlagSuccess, freeCameraFlagValue = pcall(function()
	return settings():GetFFlag("FreeCameraForAdmins")
end)
if freeCameraFlagSuccess and freeCameraFlagValue then
	require(game:GetService("CoreGui").RobloxGui.Modules.Server.FreeCamera.FreeCameraInstaller)()
end

if UserSettings():IsUserFeatureEnabled("UserUseSoundDispatcher") then
	require(game:GetService("CoreGui").RobloxGui.Modules.Server.ServerSound.SoundDispatcherInstaller)()
end