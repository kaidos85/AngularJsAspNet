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
    public class ProductController : Controller
    {
        ApplicationDbContext db = new ApplicationDbContext();

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult List()
        {
            return Json(db.Products.Select(c => new ProductDTO
            {
                Id = c.Id,
                Name = c.Name,
                Category_Id = c.Category_Id,
                CategoryName = c.Category.Name
            }).ToList(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult Add(ProductDTO dto)
        {
            db.Products.Add(new Product { Name = dto.Name, Category_Id = dto.Category_Id });
            return Json(db.SaveChanges() > 0);
        }

        public JsonResult Edit(ProductDTO dto)
        {
            var entity = db.Products.Find(dto.Id);
            if (entity != null)
            {
                entity.Name = dto.Name;
                entity.Category_Id = dto.Category_Id;
                return Json(db.SaveChanges() > 0);
            }
            return Json(new { msg = "Not found" });
        }
    }
}