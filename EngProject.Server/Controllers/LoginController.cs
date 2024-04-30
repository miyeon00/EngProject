using EngProject.Server.Model;
using EngProject.Server.Service;
using Microsoft.AspNetCore.Mvc;

namespace EngProject.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : Controller
    {
        private readonly ILoginService _loginService;

        public LoginController(ILoginService loginService)
        {
            _loginService = loginService;
        }

        [HttpPost]
        [Route("Insert")]
        public async Task<IActionResult> AddLoginLog([FromBody] Login login)
        {
            var result = await _loginService.InsertLoginLog(login);

            return Ok(result);
        }
    }
}
