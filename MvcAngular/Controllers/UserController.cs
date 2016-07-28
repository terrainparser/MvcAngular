using DataAccessLayer.Repositories;
using MvcAngular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using dataModels = DataAccessLayer.Models;
namespace MvcAngular.Controllers
{
    public class UserController : Controller
    {
        //
        // GET: /User/

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult RegisterUser(User user)
        {
            UserRepository userRepository = new UserRepository();
            
                userRepository.AddUser(new dataModels.User { FirstName = user.firstName, LastName = user.lastName, Email = user.emailId });
            
            return new JsonResult();
        }

    }
}
