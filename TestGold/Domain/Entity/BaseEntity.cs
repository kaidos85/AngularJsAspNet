using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TestGold.Domain.Entity
{
    public abstract class BaseEntity
    {
        [Key]
        public int Id { get; set; }
    }
}