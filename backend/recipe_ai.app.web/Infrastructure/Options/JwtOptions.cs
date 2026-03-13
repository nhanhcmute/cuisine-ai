namespace recipe_ai.app.web.Infrastructure.Options;

public class JwtOptions
{
    public const string SectionName = "Jwt";
    public string Secret { get; set; } = string.Empty;
}
