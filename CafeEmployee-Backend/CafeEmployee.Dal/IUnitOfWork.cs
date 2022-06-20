using CafeEmployee.Core.Entities;
using CafeEmployee.Core.Repository;

namespace CafeEmployee.Dal
{
    public interface IUnitOfWork
    {
        IRepository<Cafe, Guid> CafeRepository { get; }
        IRepository<Employee, int> EmployeeRepository { get; }
    }
}
