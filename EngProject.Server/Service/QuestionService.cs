using System.Security.Cryptography;

namespace EngProject.Server.Model
{
    public class QuestionService : IQuestionService
    {
        private readonly IDbService _dbService;

        public QuestionService(IDbService dbService)
        {
            _dbService = dbService;
        }


        public async Task<bool> CreateQuestion(Question question)
        {
            var insertRow =
                await _dbService.EditData(
                    "Insert INTO public.question(" +
                    "part, title, instruction, contents, "+
                    "input_date, category, numberofquestion, "+
                    "settest, orderofquestion "+
                    ") VALUES "+
                    "( @part, @title, @instruction, @contents, "+
                    "@InputDate, @category, @numberofquestion, "+
                    "@settest, @orderofquestion );"
                    ,
                    question);
            bool result = false;
            if (insertRow == 1)
            {
                result = true;
            }
            return result;
        }

        public async Task<bool> CreateQuestionAnswer(QuestionAnswer answer)
        {
            var insertRow =
                await _dbService.EditData(
                    "INSERT INTO public.answer(fullname, answer_no, answer, origin, input_date) VALUES (@fullname, @answer_no, @answer, @origin, "+DateTime.Now+");",
                    answer);
            bool result = false;
            if (insertRow == 1)
            {
                result = true;
            }
            return result;
        }

        public async Task<List<Question>> GetQuestionList()
        {
            var employeeList = await _dbService.GetAll<Question>("SELECT * FROM public.question", new { });
            return employeeList;
        }

        public async Task<List<Question>> GetQuestionList(string settest, string category, int orderofquestion)
        {
            var employeeList = await _dbService.GetAll<Question>("SELECT * FROM public.question where settest=@settest and category=@category and orderofquestion=@orderofquestion", new { settest,category, orderofquestion });
            return employeeList;
        }



        public async Task<Question> GetQuestion(int no)
        {
            var employeeList = await _dbService.GetAsync<Question>("SELECT * FROM public.question where no=@no", new { no });
            return employeeList;
        }

        public async Task<Question> UpdateQuestion(Question question)
        {
            var updateQuestion =
                await _dbService.EditData(
                    "Update public.question SET part = @part,title = @title, instruction = @instruction, contents = @contents WHERE no=@no",
                    question);
            return question;
        }

        public async Task<bool> DeleteQuestion(int no)
        {
            var deleteEmployee = await _dbService.EditData("DELETE FROM public.question WHERE no=@no", new { no });
            return true;
        }
    }
}
