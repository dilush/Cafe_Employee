using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace CafeEmployee.Dal
{
    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<DataContext>
    {
        public DataContext CreateDbContext(string[] args)
        {
            var optionBuilder = new DbContextOptionsBuilder<DataContext>();
            optionBuilder.UseSqlite(($"Data Source=database.db"));
            return new DataContext(optionBuilder.Options);
        }
    }
}
