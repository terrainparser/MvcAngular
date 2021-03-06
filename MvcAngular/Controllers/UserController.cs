﻿using DataAccessLayer.Repositories;
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

            userRepository.AddUser(new dataModels.User
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.EmailId,
                UserId = user.UserId,
                Password = user.Password
            });
            return new JsonResult();
        }

        //public JsonResult SignIn(string username, string password)
        public JsonResult SignIn(User user)
        {
            //User user = new User();
            //user.UserId=username;
            //user.Password = password;
            UserRepository userRepository = new UserRepository();
            var result= userRepository.ValidateUser(new dataModels.User { UserId = user.UserId, Password = user.Password });
            return Json(result,JsonRequestBehavior.AllowGet);
        }

    }
}
