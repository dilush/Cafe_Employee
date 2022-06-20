using AutoMapper;
using CafeEmployee.API.Models;
using CafeEmployee.Core.Entities;
using CafeEmployee.Services.Employee;
using Microsoft.AspNetCore.Mvc;

namespace CafeEmployee.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IEmployeeService _employeeService;

        public EmployeeController(IMapper mapper, 
            IEmployeeService employeeService)
        {
            _mapper = mapper;
            _employeeService = employeeService;
        }

        [HttpGet]
        public async Task<IActionResult> Get(Guid? cafeId = null)
        {
            var cafeList = await _employeeService.GetEmployees(cafeId);
            return Ok(cafeList.Select(_mapper.Map<EmployeeDetailsBindingModel>));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreateEmployeeBindingModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var cafe = await _employeeService.CreateEmployee(_mapper.Map<Employee>(model));
            return Ok(_mapper.Map<EmployeeDetailsBindingModel>(cafe));
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] UpdateEmployeeBindingModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var cafe = await _employeeService.UpdateEmployee(_mapper.Map<Employee>(model));
            return Ok(_mapper.Map<EmployeeDetailsBindingModel>(cafe));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _employeeService.DeleteEmployee(id);
            return Ok();
        }
    }
}
