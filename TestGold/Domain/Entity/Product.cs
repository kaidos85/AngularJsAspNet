using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace TestGold.Domain.Entity
{
    public class Product: BaseEntityName
    {        
        public int Category_Id { get; set; }
        [ForeignKey("Category_Id")]    
        public virtual Category Category { get; set; }         
        public virtual List<Operation> Operations { get; set; }  
    }
}