using CafeEmployee.Dal;
using Microsoft.EntityFrameworkCore;

namespace CafeEmployee.Services.Employee
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IUnitOfWork _unitOfWork;

        public EmployeeService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<List<Core.Entities.Employee>> GetEmployees(Guid? cafeId)
        {
            var query = _unitOfWork.EmployeeRepository.Get();

            if (cafeId == null)
            {
                return await query.OrderByDescending(c => c.DaysWorked).Include(c=>c.Cafe)
                    .ToListAsync();
            }

            query = query.Where(c => c.CafeId == cafeId.Value).Include(c=>c.Cafe);

            return await query.OrderByDescending(c => c.DaysWorked).ToListAsync();
        }

        public async Task<Core.Entities.Employee> CreateEmployee(Core.Entities.Employee employee)
        {
            if (employee == null)
            {
                throw new ArgumentNullException(nameof(employee));
            }

            await _unitOfWork.EmployeeRepository.Add(employee);
            return employee;
        }

        public async Task<Core.Entities.Employee> UpdateEmployee(Core.Entities.Employee employee)
        {
            if (employee == null)
            {
                throw new ArgumentNullException(nameof(employee));
            }

            await _unitOfWork.EmployeeRepository.Update(employee);
            return employee;
        }

        public async Task DeleteEmployee(int id)
        {
            await _unitOfWork.EmployeeRepository.Delete(id);
        }
    }
}
