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
    public class EmployeesController : GenericController
    {
        public static List<Employee> Employees
        {
            get
            {
                return Entities.OfType<Employee>().ToList();
            }
        }

        public static List<Entity> Entities
        {
            get
            {
                return GenericController.Entities;
            }
        }

        public EmployeesController()
        {
            if (Employees.Count == 0)
            {
                Entities.Add(
                    new Employee()
                    {
                        Id = Guid.NewGuid(),
                        Name = "Karen",
                        Surname = "Siles",
                        Email = "L@l",
                        Password = "asdf",
                        Shift = "night"
                    });

                Entities.Add(
                    new Employee()
                    {
                        Id = Guid.NewGuid(),
                        Name = "Pol",
                        Surname = "Mil",
                        Email = "O@o",
                        Password = "1234",
                        Shift = "morning"
                    });
            }
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Entity>> Get()
        {
            return Employees;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Entity> Get(string id)
        {
            return Entities.FirstOrDefault(x => x.Id.ToString() == id);
        }

        // POST api/values
        [HttpPost]
        public ActionResult<Employee> Post([FromBody] Employee value)
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
        public ActionResult<Employee> Put(Guid id, [FromBody] Employee value)
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
