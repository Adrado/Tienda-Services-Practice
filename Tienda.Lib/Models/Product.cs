using System;
using System.Collections.Generic;
using System.Text;

namespace Tienda.Lib.Models
{
    public class Product : Entity
    {
        public string ProductName { get; set; }
        public int Price { get; set; }
    }
}
