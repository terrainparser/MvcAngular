﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcAngular.Models
{
    public class User
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserId { get; set; }
        public string EmailId { get; set; }
        public string Password { get; set; }
    }
}