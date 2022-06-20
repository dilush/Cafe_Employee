using System.ComponentModel.DataAnnotations;

namespace CafeEmployee.Core.Entities
{
    public class Cafe
    {
        public Guid Id { get; set; }
        [MaxLength(50)]
        public string Name { get; set; }
        [MaxLength(100)]
        public string Description { get; set; }
        [MaxLength(400)]
        public string Logo { get; set; }
        [MaxLength(50)]
        public string Location { get; set; }

        public virtual List<Employee> Employees { get; set; }
    }
}
