using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TestGold.DTO
{
    public class StoreDTO
    {
        public int page { get; set; }
        public int total { get; set; }
        public object data { get; set; }
    }
}