using System;
using System.Collections.Generic;
using System.Text;

namespace Tienda.Lib.Models
{
    public class User : Entity
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

    }
}
