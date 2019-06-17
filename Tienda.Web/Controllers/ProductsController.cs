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
    public class ProductsController : GenericController
    {
        public static List<Product> Products
        {
            get
            {
                return Entities.OfType<Product>().ToList();
            }
        }

        public static List<Entity> Entities
        {
            get
            {
                return GenericController.Entities;
            }
        }

        public ProductsController()
        {
            if (Products.Count == 0)
            {
                Entities.Add(
                    new Product()
                    {
                        Id = Guid.NewGuid(),
                        ProductName = "Bike",
                        Price = 200
                    });

                Entities.Add(
                    new Product()
                    {
                        Id = Guid.NewGuid(),
                        ProductName = "Skate",
                        Price = 100
                    });
            }
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Entity>> Get()
        {
            return Products;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Entity> Get(string id)
        {
            return Entities.FirstOrDefault(x => x.Id.ToString() == id);
        }

        // POST api/values
        [HttpPost]
        public ActionResult<Product> Post([FromBody] Product value)
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
        public ActionResult<Product> Put(Guid id, [FromBody] Product value)
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
