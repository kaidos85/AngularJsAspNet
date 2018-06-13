using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace TestGold.Domain.Entity
{
    public class Operation: BaseEntity
    {
        public int Product_Id { get; set; }
        [ForeignKey("Product_Id")]
        public virtual Product Product { get; set; }
        public OperationType OperationType { get; set; }
        public DateTime PDate { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public decimal Amount { get; set; }
        public string Remark { get; set; }
        public string User_Id  { get; set; }
        [ForeignKey("User_Id")]
        public virtual ApplicationUser User { get; set; }

    }
}