using EngProject.Server.Model;

namespace EngProject.Server.Service
{
    public interface ILoginService
    {
        Task<bool> InsertLoginLog(Login login);
      
    }
}
