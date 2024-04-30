using EngProject.Server.Model;

namespace EngProject.Server.Service
{
    public class LoginService :ILoginService
    {
        readonly IDbService _dbService;
        public LoginService(IDbService dbService)
        {
            _dbService = dbService;
        }

        public async Task<bool> InsertLoginLog(Login login)
        {
            var insertlog = await _dbService.EditData("Insert into LoginLog (Fullname) values (@fullname)", login);
            return true;
        }
    }
}
