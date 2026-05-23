using backend.DBContext;
using backend.Interface;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public class PersonService : IPersonService
    {
        private readonly ApplicationDbContext _context;
        public PersonService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Person>> GetAllPerson()
        {
            return await _context.Persons.OrderBy(x => x.ID).ToListAsync();
        }
    }
}
