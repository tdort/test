using System.Security.Cryptography;
using System.Text;

namespace Roblox.Website.Lib;

public static class SecretCompare
{
	// Constant-time compare that FAILS CLOSED: if the expected secret is unset/empty or nothing was provided, it is never a match
	// (a plain `provided == expected` is true when both are null, i.e. when the config secret was never set).
	public static bool IsValid(string? provided, string? expected)
	{
		if (string.IsNullOrEmpty(provided) || string.IsNullOrEmpty(expected)) return false;
		var a = Encoding.UTF8.GetBytes(provided);
		var b = Encoding.UTF8.GetBytes(expected);
		return a.Length == b.Length && CryptographicOperations.FixedTimeEquals(a, b);
	}
}
