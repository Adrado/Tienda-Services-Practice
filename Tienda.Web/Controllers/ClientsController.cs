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
    public class ClientsController : GenericController
    {
        public static List<Client> Clients
        {
            get
            {
                return Entities.OfType<Client>().ToList();
            }
        }

        public static List<Entity> Entities
        {
            get
            {
                return GenericController.Entities;
            }
        }

        public ClientsController()
        {
            if (Clients.Count == 0)
            {
                Entities.Add(
                    new Client()
                    {
                        Id = Guid.NewGuid(),
                        Name = "Maya",
                        Surname = "Alcalá",
                        Email = "L@l",
                        Password = "asdf",
                        Address = "Libertad 087",
                        Purchases = new List<string>() { "Bike" }
                    });

                Entities.Add(
                    new Client()
                    {
                        Id = Guid.NewGuid(),
                        Name = "Oprix",
                        Surname = "Arwoq",
                        Email = "O@o",
                        Password = "1234",
                        Address = "Infierno666",
                        Purchases = new List<string>() { "Skate" }
                    });
            }
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Entity>> Get()
        {
            return Clients;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Entity> Get(string id)
        {
            return Entities.FirstOrDefault(x => x.Id.ToString() == id);
        }

        // POST api/values
        [HttpPost]
        public ActionResult<Client> Post([FromBody] Client value)
        {
            if (value.Id == default(Guid))
            {
                value.Id = Guid.NewGuid();
            }
            Entities.Add(value);
            return value;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public ActionResult<Client> Put(Guid id, [FromBody] Client value)
        {
            Entities[Entities.FindIndex(x => x.Id == id)] = value;
            return value;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            Entities.Remove(Entities.FirstOrDefault(x => x.Id.ToString() == id));
        }
    }
}
