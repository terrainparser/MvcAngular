using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Context
{
    public class MvcAngularContext:DbContext
    {
        public MvcAngularContext():base()
        {
        }
        public DbSet<User> Users{get;set;}
        public DbSet<Review> Reviews{get;set;}
    }
}
