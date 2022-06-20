using CafeEmployee.Dal;
using Microsoft.EntityFrameworkCore;

namespace CafeEmployee.Services.Cafe
{
    public class CafeService : ICafeService
    {
        private readonly IUnitOfWork _unitOfWork;

        public CafeService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<List<Core.Entities.Cafe>> GetCafes(string location)
        {
            var query = _unitOfWork.CafeRepository.Get();

            if (string.IsNullOrEmpty(location))
            {
                return await query.OrderByDescending(c => c.Employees.Count())
                    .Include(c => c.Employees).ToListAsync();
            }

            query = query.Where(c => c.Location.ToLower() == location.ToLower())
                .Include(c => c.Employees);

            return await query.OrderByDescending(c => c.Employees.Count()).ToListAsync();
        }

        public async Task<Core.Entities.Cafe> CreateCafe(Core.Entities.Cafe cafe)
        {
            if (cafe == null)
            {
                throw new ArgumentNullException(nameof(cafe));
            }

            await _unitOfWork.CafeRepository.Add(cafe);
            return cafe;
        }

        public async Task<Core.Entities.Cafe> UpdateCafe(Core.Entities.Cafe cafe)
        {
            if (cafe == null)
            {
                throw new ArgumentNullException(nameof(cafe));
            }

            await _unitOfWork.CafeRepository.Update(cafe);
            return cafe;
        }

        public async Task DeleteCafe(Guid id)
        {
            await _unitOfWork.CafeRepository.Delete(id);
        }
    }
}
