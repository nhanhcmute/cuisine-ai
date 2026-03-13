using Microsoft.AspNetCore.Mvc;

namespace recipe_ai.app.web.Controller;

[ApiController]
public class SysUserController : ControllerBase
{
    [HttpGet("getUserLogin")]
    public IActionResult GetUserLogin()
    {
        return Ok(new
        {
            user_id = "demo",
            display_name = "Demo User"
        });
    }
}
