using Microsoft.AspNetCore.Mvc;

namespace recipe_ai.app.web.Controller;

[ApiController]
public class DashboardController : ControllerBase
{
    [HttpGet("getOverview")]
    public IActionResult GetOverview()
    {
        return Ok(new { status = "ok" });
    }
}
