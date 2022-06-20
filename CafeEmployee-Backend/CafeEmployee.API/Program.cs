using CafeEmployee.Dal;
using CafeEmployee.Services.Cafe;
using CafeEmployee.Services.Employee;
using CafeEmployee.Core.Entities;
using Microsoft.EntityFrameworkCore;

// Seed data
var cafes = new List<Cafe>()
{
    new Cafe()
    {
        Name="Dream cafe",
        Location="Tengah",
        Logo="https://picsum.photos/200/90",
        Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nisl ac neque suscipit " +
        "tincidunt.Sed sit amet est ante. Mauris aliquam turpis non est elementum placerat. Aliquam sed " +
        "accumsan augue. Donec purus eros.",
        Employees =new List<Employee>()
        {
            new Employee() { Name = "Jakob", EmailAddress="jcob@gmail.com", PhoneNumber="99999999", Gender=CafeEmployee.Core.Enums.Gender.Male},
            new Employee() { Name = "Mark J", EmailAddress="markj@gmail.com", PhoneNumber="89999999", Gender=CafeEmployee.Core.Enums.Gender.Male},
        }
    },
    new Cafe()
    {
        Name="Cafe five star",
        Location="Newton",
        Logo="https://picsum.photos/200/90",
        Description="Curabitur magna lacus, molestie vel nisi varius, euismod facilisis tortor. Etiam eget vestibulum " +
        "dolor. Cras eget semper ante, nec tincidunt justo. Nullam libero lacus, tincidunt non libero vel, faucibus " +
        "elementum purus. Mauris et leo scelerisque.",
        Employees =new List<Employee>()
        {
            new Employee() { Name = "Bob Ron", EmailAddress="bob@gmail.com", PhoneNumber="99999999",  Gender=CafeEmployee.Core.Enums.Gender.Female}
        }
    },
    new Cafe()
    {
        Name="Coco cafe",
        Location="Tengah",
        Logo="test",
        Description="Integer odio felis, tempus accumsan auctor sit amet, dapibus id enim. Nullam dui lacus, sollicitudin " +
        "vitae purus eu, suscipit faucibus metus.",
        Employees =new List<Employee>()
        {
            new Employee() { Name = "AnilJa", EmailAddress="anilja@gmail.com", PhoneNumber="99999999", Gender=CafeEmployee.Core.Enums.Gender.Male}
        }
    },
    new Cafe()
    {
        Name="Cafe choco land",
        Location="Tengah",
        Logo="https://picsum.photos/200/90",
        Description="Morbi vel ipsum dapibus, feugiat lorem ut, lobortis dolor. Proin. Sollicitudin " +
        "vitae purus eu, suscipit faucibus metus.",
         Employees =new List<Employee>()
        {
            new Employee() { Name = "Madara", EmailAddress="madara@gmail.com", PhoneNumber="88888888", Gender=CafeEmployee.Core.Enums.Gender.Male}
        }
    },
};

var builder = WebApplication.CreateBuilder(args);

// Create database - DEMO PURPOSE ONLY

var dbContextOptionBuilder = new DbContextOptionsBuilder<DataContext>();
dbContextOptionBuilder.UseSqlite("Data Source=database-prod.db");

using (var context = new DataContext(dbContextOptionBuilder.Options))
{
    context.Database.EnsureCreated();

    foreach (var cafe in cafes)
    {
        var matchingCafe = context.Cafes.FirstOrDefault(b => b.Name == cafe.Name);
        if (matchingCafe == null)
        {
            context.Cafes.Add(cafe);
        }
    }


    context.SaveChanges();
}


// Add services to the container.

builder.Services.AddDbContext<DataContext>(options =>
    options.UseSqlite("Data Source=database-prod.db"));

builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddScoped<ICafeService, CafeService>();
builder.Services.AddScoped<IEmployeeService, EmployeeService>();

builder.Services.AddAutoMapper(typeof(Program));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Services cors
builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
{
    builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("corsapp");

app.UseAuthorization();

app.MapControllers();

app.Run();
