namespace recipe_ai.app.web.Infrastructure.Options;

public class MongoOptions
{
    public const string SectionName = "Mongo";
    public string Uri { get; set; } = string.Empty;
    public string Database { get; set; } = string.Empty;
}
