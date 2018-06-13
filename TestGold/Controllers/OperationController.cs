using PredicateExtensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using System.Web.Mvc;
using TestGold.Domain;
using TestGold.Domain.Entity;
using TestGold.DTO;

namespace TestGold.Controllers
{
    public class OperationController : Controller
    {
        ApplicationDbContext db = new ApplicationDbContext();
        // GET: Operation
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult List(PageDTO page)
        {
            var res = SelectOperations(db.Operations); 
            return Json(res, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ListFilter(FilterDTO filter)
        {
            IQueryable<Operation> res = db.Operations;
            List<Expression<Func<Operation, bool>>> predicatList = new List<Expression<Func<Operation, bool>>>();
            if (filter?.Category_Id.HasValue ?? false)
            {
                predicatList.Add(c => c.Product.Category_Id == filter.Category_Id.Value);
            }
            if (filter?.Product_Id.HasValue ?? false)
            {
                predicatList.Add(c => c.Product_Id == filter.Product_Id.Value);
            }
            if (filter?.OperationType.HasValue ?? false)
            {
                predicatList.Add(c => c.OperationType == (OperationType)filter.OperationType.Value);
            }
            if (filter?.Date1.HasValue ?? false)
            {
                predicatList.Add(c => c.PDate >= filter.Date1.Value);
            }
            if (filter?.Date2.HasValue ?? false)
            {
                predicatList.Add(c => c.PDate <= filter.Date2.Value);
            }
            if (predicatList.Count > 0)
            {
                var predicat = predicatList.Aggregate((f, s) => f.And(s));
                var res2 = SelectOperations(res.Where(predicat));
                return Json(res2);
            }    
            var result = SelectOperations(res);
            return Json(result);
        }

        List<OperationDTO> SelectOperations(IQueryable<Operation> res)
        {
            return res.Select(c => new OperationDTO
            {
                Id = c.Id,
                Product_Id = c.Product_Id,
                ProductName = c.Product.Name,
                PDate = c.PDate,
                Quantity = c.Quantity,
                OperationType = (int)c.OperationType,
                OperationTypeName = c.OperationType.ToString(),
                Amount = c.Amount,
                Price = c.Price,
                Remark = c.Remark
            }).ToList();
        }

        public JsonResult Add(OperationDTO dto)
        {
            db.Operations.Add(new Operation
            {
                PDate = dto.PDate,
                OperationType = (OperationType)dto.OperationType,
                Product_Id = dto.Product_Id,
                Quantity = dto.Quantity,
                Price = dto.Price,
                Amount = dto.Amount,
                Remark = dto.Remark
            });
            return Json(db.SaveChanges() > 0);
        }
        public JsonResult Edit(OperationDTO dto)
        {
            var entity = db.Operations.Find(dto.Id);
            if (entity != null)
            {
                entity.PDate = dto.PDate;
                entity.OperationType = (OperationType)dto.OperationType;
                entity.Product_Id = dto.Product_Id;
                entity.Quantity = dto.Quantity;
                entity.Price = dto.Price;
                entity.Amount = dto.Amount;
                entity.Remark = dto.Remark;                
                Json(db.SaveChanges() > 0);
            }
            return Json(new { msg = "Not found" });
        }
    }
}