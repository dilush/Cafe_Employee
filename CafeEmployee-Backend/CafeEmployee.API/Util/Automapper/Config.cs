using AutoMapper;
using CafeEmployee.API.Models;
using CafeEmployee.Core.Entities;

namespace CafeEmployee.API.Util.Automapper
{
    public class Config : Profile
    {
        public Config()
        {
            CreateMap<CreateCafeBindingModel, Cafe>();
            CreateMap<UpdateCafeBindingModel, Cafe>();
            CreateMap<Cafe, CafeDetailsBindingModel>()
                .ForMember(c => c.EmployeeCount, opt => opt.MapFrom(d => d.Employees.Count));

            CreateMap<CreateEmployeeBindingModel, Employee>();
            CreateMap<UpdateEmployeeBindingModel, Employee>();
            CreateMap<Employee, EmployeeDetailsBindingModel>()
                .ForMember(c => c.CafeName, opt => opt.MapFrom(d => d.Cafe.Name));
        }
    }
}
