using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TestGold.DTO
{
    public class ProductDTO
    {        
        public int Id { get; set; }
        public string Name { get; set; }
        public string CategoryName { get; set; }
        public int Category_Id { get; set; }
    }
}