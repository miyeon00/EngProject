namespace EngProject.Server.Model
{
    public class Question
    {
        public int No { get; set; }
        public string Category { get; set; }
        public string Part { get; set; }
        public string Title { get; set; }
        public string Instruction { get; set; }
        public string Contents { get; set; }
        public int NumberOfQuestion { get; set; }
 
        public string setTest { get; set; }

        public int OrderOfQuestion { get; set; }
        public DateTime InputDate { get; set; }
    }
}
