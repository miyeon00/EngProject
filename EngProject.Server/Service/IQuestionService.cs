namespace EngProject.Server.Model
{
    public interface IQuestionService
    {
        Task<bool> CreateQuestion(Question question);

        Task<bool> CreateQuestionAnswer(QuestionAnswer answer);
        Task<List<Question>> GetQuestionList();

        Task<List<Question>> GetQuestionList(string settest, string category, int orderofnumber);

        Task<Question> UpdateQuestion(Question question);
        Task<bool> DeleteQuestion(int key);


    }
}
