using Microsoft.AspNetCore.Mvc.ApplicationModels;
using recipe_ai.app.web.Infrastructure.Middlewares;
using recipe_ai.app.web.Infrastructure.Options;
using recipe_ai.app.web.Infrastructure.Routing;

var builder = WebApplication.CreateBuilder(args);

// Env vars take precedence (MONGO_URI, MONGO_DB, JWT_SECRET, AI_PROVIDER_KEY)
var envConfig = new Dictionary<string, string?>
{
    ["Mongo:Uri"] = Environment.GetEnvironmentVariable("MONGO_URI") ?? builder.Configuration["Mongo:Uri"],
    ["Mongo:Database"] = Environment.GetEnvironmentVariable("MONGO_DB") ?? builder.Configuration["Mongo:Database"],
    ["Jwt:Secret"] = Environment.GetEnvironmentVariable("JWT_SECRET") ?? builder.Configuration["Jwt:Secret"],
    ["Ai:ProviderKey"] = Environment.GetEnvironmentVariable("AI_PROVIDER_KEY") ?? builder.Configuration["Ai:ProviderKey"]
};
builder.Configuration.AddInMemoryCollection(envConfig!);

builder.Services.Configure<MongoOptions>(builder.Configuration.GetSection(MongoOptions.SectionName));
builder.Services.Configure<JwtOptions>(builder.Configuration.GetSection(JwtOptions.SectionName));
builder.Services.Configure<AiOptions>(builder.Configuration.GetSection(AiOptions.SectionName));

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddControllers(options =>
{
    options.Conventions.Add(new ControllerCtrRouteConvention());
});

var app = builder.Build();

app.UseCors();
app.UseMiddleware<GlobalExceptionMiddleware>();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.MapGet("/health", () => Results.Json(new { status = "ok" }));

app.Run();
