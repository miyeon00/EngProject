using EngProject.Server.Model;
using EngProject.Server.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

var specificOrgins = "_myAllowSpecificOrigins";

//CORS----------------------------
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: specificOrgins,
                      policy =>
                      {
                          policy.WithOrigins("https://localhost:5173")
                          .AllowAnyHeader(); 
                      });
});
//CORS--------------------------------

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IDbService, DbService>();
builder.Services.AddScoped<IQuestionService, QuestionService>();
builder.Services.AddScoped<ILoginService, LoginService>();

var app = builder.Build();

//CORS-----------------------------
app.UseCors(specificOrgins);
//CORS-----------------------------

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
