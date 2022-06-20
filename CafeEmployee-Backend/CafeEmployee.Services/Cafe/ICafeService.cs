namespace CafeEmployee.Services.Cafe;

public interface ICafeService
{
    Task<List<Core.Entities.Cafe>> GetCafes(string location);
    Task<Core.Entities.Cafe> CreateCafe(Core.Entities.Cafe cafe);
    Task<Core.Entities.Cafe> UpdateCafe(Core.Entities.Cafe cafe);
    Task DeleteCafe(Guid id);
}