using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TestGold.DTO
{
    public class FilterDTO
    {
        public int? Product_Id { get; set; }
        public int? Category_Id { get; set; }
        public int? OperationType { get; set; }
        public DateTime? Date1 { get; set; }
        public DateTime? Date2 { get; set; }

    }
}