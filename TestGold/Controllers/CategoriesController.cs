using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using TestGold.Domain;
using TestGold.Domain.Entity;
using TestGold.DTO;

namespace TestGold.Controllers
{
    public class CategoriesController : Controller
    {
        ApplicationDbContext db = new ApplicationDbContext();

        // GET: Categories
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult List(PageDTO page)
        {
            return Json(db.Categories.Select(c => new CategoryDTO
            {
                Id = c.Id,
                Name = c.Name
            }).ToList(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult Add(CategoryDTO dto)
        {
            db.Categories.Add(new Category { Name = dto.Name });
            return Json(db.SaveChanges() > 0);
        }
        public JsonResult Edit(CategoryDTO dto)
        {
            var entity = db.Categories.Find(dto.Id);
            if(entity != null)
            {
                entity.Name = dto.Name;
                Json(db.SaveChanges() > 0);
            }
            return Json(new { msg = "Not found" });
        }

    }
}
