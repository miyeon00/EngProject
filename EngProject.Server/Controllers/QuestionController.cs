using EngProject.Server.Model;
using Microsoft.AspNetCore.Mvc;

namespace EngProject.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class QuestionController : Controller
    {
        private readonly IQuestionService _questionService;

        public QuestionController(IQuestionService questionService)
        {
            _questionService = questionService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var result = await _questionService.GetQuestionList();

            return Ok(result);
        }

        [HttpGet]
        [Route("QuestionList")]
        public async Task<IActionResult> getQuestionListBySetNumberAndCategoryAndOrder(string setTest,string category, int order)
        {
            var result = await _questionService.GetQuestionList(setTest, category, order);

            return Ok(result);
        }

        //[HttpPost]
        //[Route("AnswerInsert")]
        //public async Task<IActionResult> AddQuestionAnswers([FromBody] QuestionAnswer answers)
        //{
        //    var result = await _questionService.CreateQuestion(answers);

        //    return Ok(result);
        //}


        [HttpPost]
        [Route("Insert")]
        public async Task<IActionResult> AddQuestion([FromBody] Question question)
        {
            var result = await _questionService.CreateQuestion(question);

            return Ok(result);
        }

        [HttpPost]
        [Route("Update")]
        public async Task<IActionResult> UpdQuestion([FromBody] Question question)
        {
            var result = await _questionService.UpdateQuestion(question);

            return Ok(result);
        }

        [HttpGet]
        [Route("Delete")]
        public async Task<IActionResult> delQuestion([FromBody] Question question)
        {
            var result = await _questionService.UpdateQuestion(question);

            return Ok(result);
        }
    }
}
