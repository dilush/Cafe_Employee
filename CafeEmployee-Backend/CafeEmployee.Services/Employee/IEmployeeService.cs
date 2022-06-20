namespace CafeEmployee.Services.Employee;

public interface IEmployeeService
{
    Task<List<Core.Entities.Employee>> GetEmployees(Guid? cafeId);
    Task<Core.Entities.Employee> CreateEmployee(Core.Entities.Employee employee);
    Task<Core.Entities.Employee> UpdateEmployee(Core.Entities.Employee employee);
    Task DeleteEmployee(int id);
}
