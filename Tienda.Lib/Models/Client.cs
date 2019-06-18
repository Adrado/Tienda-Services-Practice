using System;
using System.Collections.Generic;
using System.Text;

namespace Tienda.Lib.Models
{
    public class Client : User
    {
        public string Address { get; set; }
        public List<Guid> Purchases { get; set; }
    }
}
