namespace Roblox.Dto.Users;


public class UserBanEntry
{
    public DateTime createdAt { get; set; }
    public DateTime? expiredAt { get; set; }
    public bool canUnlock => expiredAt != null && DateTime.UtcNow >= expiredAt;
    public string reason { get; set; }
    public long? offensiveAssetId { get; set; }
    public int? offensiveAssetType { get; set; }
    public string? offensiveAssetName { get; set; }
}