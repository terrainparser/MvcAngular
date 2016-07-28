using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Models
{
    public class User
    {
        public User()
        {

        }
        public int UserId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

       // public Review Review { get; set; }
    }

    public class Review
    {
        public Review()
        {

        }
        public int ReviewId { get; set; }

        public int Rating { get; set; }

        public string Comment { get; set; }

        public User User { get; set; }
        //List<User> Users { get; set; }
    }
}
