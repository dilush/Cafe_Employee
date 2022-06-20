using System.ComponentModel.DataAnnotations;
using CafeEmployee.Core.Enums;

namespace CafeEmployee.API.Models
{
    public class EmployeeBaseBindingModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        [DataType(DataType.EmailAddress)]
        public string EmailAddress { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public Gender Gender { get; set; }
        public Guid? CafeId { get; set; }
    }

    public class CreateEmployeeBindingModel : EmployeeBaseBindingModel
    {

    }

    public class UpdateEmployeeBindingModel : EmployeeBaseBindingModel
    {
        [Required]
        public int Id { get; set; }
    }

    public class EmployeeDetailsBindingModel : EmployeeBaseBindingModel
    {
        public int Id { get; set; }
        public string CafeName { get; set; }
        public string EmployeeId { get; set; }
        public int DaysWorked { get; set; }
    }
}
