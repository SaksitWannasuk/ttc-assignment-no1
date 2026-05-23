using backend.Models;
using backend.Services;

namespace backend.Interface
{
    public interface IPersonService
    {
        Task<List<Person>> GetAllPerson();
    }
}
