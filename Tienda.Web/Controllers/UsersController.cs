using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Tienda.Lib.Models;

namespace Tienda.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : GenericController
    {
        public static List<User> Users
        {
            get
            {
                return Entities.OfType<User>().ToList();
            }
        }

        public static List<Entity> Entities
        {
            get
            {
                return GenericController.Entities;
            }
        }

        public UsersController()
        {
            if (Users.Count == 0)
            {
                Entities.Add(
                    new User()
                    {
                        Id = Guid.NewGuid(),
                        Name = "Lolo",
                        Surname = "ASDF",
                        Email = "a@a",
                        Password = "asdf"
                    });

                Entities.Add(
                    new User()
                    {
                        Id = Guid.NewGuid(),
                        Name = "Pepe",
                        Surname = "QWERTY",
                        Email = "a@a",
                        Password = "qwert"
                    });
            }
        }

        // GET api/users
        [HttpGet]
        public ActionResult<IEnumerable<Entity>> Get()
        {
            return Users;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Entity> Get(string id)
        {
            return Entities.FirstOrDefault(x => x.Id.ToString() == id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
