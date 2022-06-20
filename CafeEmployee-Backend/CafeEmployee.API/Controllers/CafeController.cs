using AutoMapper;
using CafeEmployee.API.Models;
using CafeEmployee.Core.Entities;
using CafeEmployee.Services.Cafe;
using Microsoft.AspNetCore.Mvc;

namespace CafeEmployee.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CafeController : ControllerBase
    {
        private readonly ICafeService _cafeService;
        private readonly IMapper _mapper;

        public CafeController(ICafeService cafeService, IMapper mapper)
        {
            _cafeService = cafeService;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> Get(string? location = null)
        {
            var cafeList = await _cafeService.GetCafes(location);
            return Ok(cafeList.Select(_mapper.Map<CafeDetailsBindingModel>));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]CreateCafeBindingModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var cafe = await _cafeService.CreateCafe(_mapper.Map<Cafe>(model));
            return Ok(_mapper.Map<CafeDetailsBindingModel>(cafe));
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] UpdateCafeBindingModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var cafe = await _cafeService.UpdateCafe(_mapper.Map<Cafe>(model));
            return Ok(_mapper.Map<CafeDetailsBindingModel>(cafe));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            await _cafeService.DeleteCafe(id);
            return Ok();
        }
    }
}
