using System;
using System.Collections.Generic;
using System.Text;

namespace Tienda.Lib.Models
{
    public class Product : Entity
    {
        public string Name { get; set; }
        public int Price { get; set; }
    }
}
