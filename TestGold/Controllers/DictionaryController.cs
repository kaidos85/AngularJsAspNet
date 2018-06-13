using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TestGold.Domain;
using TestGold.Domain.Entity;
using TestGold.DTO;

namespace TestGold.Controllers
{
    public class DictionaryController: Controller
    {
        ApplicationDbContext db = new ApplicationDbContext();

        public JsonResult OperationTypes()
        {
            var res = Enum.GetNames(typeof(OperationType)).Select(c => new DictionaryDTO
            {
                Id = (int)Enum.Parse(typeof(OperationType), c),
                Name = c
            }).ToList();
            return Json(res, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Categories()
        {
            var res = db.Categories.Select(c => new DictionaryDTO
            {
                Id = c.Id,
                Name = c.Name
            }).ToList();
            return Json(res, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Products()
        {
            var res = db.Products.Select(c => new DictionaryDTO
            {
                Id = c.Id,
                Name = c.Name
            }).ToList();
            return Json(res, JsonRequestBehavior.AllowGet);
        }



    }
}