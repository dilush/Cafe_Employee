namespace CafeEmployee.Core.Repository
{
    public interface IRepository<TEntity, TKey> where TEntity : class
    {
        IQueryable<TEntity> Get();
        Task<TEntity> Get(TKey id);
        Task<TEntity> Add(TEntity entity);
        Task<TEntity> Update(TEntity entity);
        Task<TEntity> Delete(TKey id);
    }
}
