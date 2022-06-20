using CafeEmployee.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace CafeEmployee.Dal
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Cafe> Cafes { get; set; }
        public DbSet<Employee> Employees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>()
                .Property(e => e.EmployeeId)
                .HasComputedColumnSql("'UI' || PRINTF('%07d',[Id])");
        }
    }
}
