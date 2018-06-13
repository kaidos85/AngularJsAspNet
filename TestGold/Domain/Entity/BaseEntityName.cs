using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TestGold.Domain.Entity
{
    public abstract class BaseEntityName: BaseEntity
    {
        public string Name { get; set; }
    }
}