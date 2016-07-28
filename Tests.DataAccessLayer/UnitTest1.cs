using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using DataAccessLayer.Repositories;
using DataAccessLayer.Models;

namespace Tests.DataAccessLayer
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestInsert()
        {
            var userRepository = new UserRepository();
            userRepository.AddUser(new User { FirstName = "H", LastName = "B", Email = "h.b@gmail.com" });

        }
    }
}
