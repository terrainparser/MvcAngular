using DataAccessLayer.Context;
using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Repositories
{
    public class UserRepository
    {
        public void AddUser(User user)
        {
            using (var context = new MvcAngularContext())
            {
                context.Users.Add(user);
                context.SaveChanges();
            }
        }

        public List<User> GetUsers()
        {
            List<User> users = null;
            using (var context = new MvcAngularContext())
            {
                users = context.Users.ToList();
            }
            return users;
        }

        public bool ValidateUser(User currentUser)
        {
            var userValidated= false;
            using (var context = new MvcAngularContext())
            {
                var matchedUser=context.Users.FirstOrDefault(usr => usr.UserId == currentUser.UserId && usr.Password == currentUser.Password);
                if (matchedUser == null)
                    userValidated = true;
            }
            return userValidated;
        }
    }
}
