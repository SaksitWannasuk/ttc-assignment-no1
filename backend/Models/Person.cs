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
    }

    public class GetAllPersonResponse : Person
    {
        public int Age { get; set; }
    }
}
