using CafeEmployee.Core.Entities;
using CafeEmployee.Core.Repository;

namespace CafeEmployee.Dal
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DataContext _dataContext;

        private IRepository<Cafe, Guid> _cafeRepository;
        private IRepository<Employee, int> _employeeRepository;

        public UnitOfWork(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public IRepository<Cafe, Guid> CafeRepository => 
            _cafeRepository ??= new Repository<Cafe, Guid>(_dataContext);
        public IRepository<Employee, int> EmployeeRepository => 
            _employeeRepository ??= new Repository<Employee, int>(_dataContext);
    }
}
