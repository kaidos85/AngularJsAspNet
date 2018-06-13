using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TestGold.DTO
{
    public class OperationDTO
    {
        public int Id { get; set; }
        public DateTime PDate { get; set; }
        public string PDateStr
        {
            get
            {
                return PDate.ToString("dd.MM.yyyy");
            }
        }
        public int OperationType { get; set; }
        public string OperationTypeName { get; set; }

        public int Product_Id { get; set; }
        public string ProductName { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public decimal Amount { get; set; }
        public string Remark { get; set; }
    }
}