using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TestGold.Domain.Entity
{
    public class Category: BaseEntityName
    {
        public virtual List<Product> Products { get; set; }
    }
}