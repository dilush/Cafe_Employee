using Microsoft.EntityFrameworkCore;


namespace CafeEmployee.Core.Repository
{
    public class Repository<TEntity, TKey> : IRepository<TEntity, TKey> where TEntity : class
    {
        private readonly DbSet<TEntity> _dbSet;
        protected readonly DbContext _dataContext;

        public Repository(DbContext dataContext)
        {
            _dataContext = dataContext;
            _dbSet = dataContext.Set<TEntity>();
        }

        public IQueryable<TEntity> Get()
        {
            return _dbSet;
        }

        public async Task<TEntity> Get(TKey id)
        {
            return await _dataContext.Set<TEntity>().FindAsync(id);
        }

        public async Task<TEntity> Add(TEntity entity)
        {
            _dataContext.Set<TEntity>().Add(entity);
            await _dataContext.SaveChangesAsync();
            return entity;
        }

        public async Task<TEntity> Delete(TKey id)
        {
            var entity = await _dataContext.Set<TEntity>().FindAsync(id);

            if (entity == null)
            {
                return entity;
            }

            _dataContext.Set<TEntity>().Remove(entity);
            await _dataContext.SaveChangesAsync();

            return entity;
        }

        public async Task<TEntity> Update(TEntity entity)
        {
            _dataContext.Entry(entity).State = EntityState.Modified;
            await _dataContext.SaveChangesAsync();
            return entity;
        }

    }
}
