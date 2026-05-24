using backend.DTOs;
using backend.Models;
using backend.Services;

namespace backend.Interfaces
{
    public interface IPersonService
    {
        Task<List<Person>> GetAllPerson();

        Task<Person> CreatePerson(CreatePersonRequest param);
    }
}
