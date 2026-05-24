using backend.DBContext;
using backend.DTOs;
using backend.Interfaces;
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
            return await _context.Persons
                .OrderBy(x => x.ID)
                .ToListAsync();
        }

        public async Task<Person> CreatePerson(CreatePersonRequest param)
        {
            var person = new Person
            {
                FirstName = param.FirstName,
                LastName = param.LastName,
                BirthDate = param.BirthDate,
                Address = param.Address,
                CreatedTime = DateTime.Now,
            };

            _context.Persons.Add(person);
            await _context.SaveChangesAsync();

            return person;
        }
    }
}
