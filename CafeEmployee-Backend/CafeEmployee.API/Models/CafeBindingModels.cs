using System.ComponentModel.DataAnnotations;

namespace CafeEmployee.API.Models
{
    public class BaseCafeBindingModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string Logo { get; set; }
        [Required]
        public string Location { get; set; }
    }

    public class CreateCafeBindingModel : BaseCafeBindingModel
    {
    }

    public class UpdateCafeBindingModel : BaseCafeBindingModel
    {
        [Required]
        public Guid Id { get; set; }
    }

    public class CafeDetailsBindingModel : BaseCafeBindingModel
    {
        public Guid Id { get; set; }
        public int EmployeeCount { get; set; }
    }
}
