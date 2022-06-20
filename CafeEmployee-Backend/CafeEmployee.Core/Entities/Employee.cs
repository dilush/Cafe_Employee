using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CafeEmployee.Core.Enums;

namespace CafeEmployee.Core.Entities
{
    public class Employee
    {
        public int Id { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public string EmployeeId { get; set; }
        [MaxLength(50)]
        public string Name { get; set; }
        [MaxLength(100)]
        public string EmailAddress { get; set; }
        [MaxLength(10)]
        public string PhoneNumber { get; set; }
        public Gender Gender { get; set; }
        public Guid? CafeId { get; set; }
        public int DaysWorked { get; set; }
        public virtual Cafe Cafe { get; set; }

    }
}
