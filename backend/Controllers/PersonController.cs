using backend.DTOs;
using backend.Interfaces;
using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private readonly IPersonService _personService;

        public PersonController(IPersonService personService)
        {
            _personService = personService;
        }

        [HttpGet("GetAllPerson")]
        public async Task<IActionResult> GetAllPerson()
        {
            var persons = await _personService.GetAllPerson();
            return Ok(persons);
        }

        [HttpPost("CreatePerson")]
        public async Task<IActionResult> Create([FromBody] CreatePersonRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _personService.CreatePerson(request);

            return Ok();
        }
    }
}
