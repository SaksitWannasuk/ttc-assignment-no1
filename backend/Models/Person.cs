using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Person
    {
        public int ID { get; set; }
        public String FirstName { get; set; }

        public String LastName { get; set; }
        public String Address { get; set; }
        public DateTime BirthDate { get; set; }
        public Boolean IsActive { get; set; }
        public DateTime CreatedTime { get; set; }
        public Nullable<DateTime> UpdatedTime { get; set; }
    }
}
