
using Microsoft.EntityFrameworkCore;
using Web_API.Models.ProfileModels;

public class StoreDbContext : DbContext
{
    public DbSet<Auth> Auth { get; set; }
   

    // Add your connection string in the constructor
    public StoreDbContext(DbContextOptions<StoreDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configure relationships between entities if needed
    }
}
