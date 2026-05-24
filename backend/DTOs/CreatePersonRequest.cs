using System.ComponentModel.DataAnnotations;

namespace backend.DTOs;

public class CreatePersonRequest
{
    [Required]
    [MaxLength(200)]
    public String FirstName { get; set; }
    [Required]
    [MaxLength(200)]
    public String LastName { get; set; }
    [Required]
    [MaxLength(2000)]
    public String Address { get; set; }
    [Required]
    public DateTime BirthDate { get; set; }
}