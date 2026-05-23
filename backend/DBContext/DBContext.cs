using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.DBContext
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options) {}

        public DbSet<Person> Persons { get; set; }
    }
}
