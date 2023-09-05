const express = require("express");
const {
  getAllEmployees,
  createEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  getEmpAccDoB,
  getEmpBonus,
} = require("../controllers/EmpController");
const router = express.Router();
const upload = require('../middleWare/upload')
 
// router.route("/").get(getAllBlogs).post(createBlog);
// router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);
router.post("/addemployee",createEmployee,);
router.get("/getemployees",getAllEmployees);
router.get("/getAccordingDob",getEmpAccDoB);
router.get("/getBonusEmployee",getEmpBonus);
router.get("/getemployee/:id",getEmployeeById);
router.put("/studenemployee",updateEmployee);
router.delete("/deleteemployee/:id?",deleteEmployee);
 
module.exports = router;