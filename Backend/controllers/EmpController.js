const EmployeeService = require("../Services/EmpService");

exports.getAllEmployees = async (req, res) => {
  try {
    const Employees = await EmployeeService.getAllEmployees();
    res.json({ data: Employees, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getEmpAccDoB = async (req, res) => {
  try {
    const Employees = await EmployeeService.getEmpAccDoB();
    res.json({ data: Employees, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getEmpBonus = async (req, res) => {
  try {
    const Employees = await EmployeeService.getEmpBonus();
    res.json({ data: Employees, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// if(req.file){
//   Employee.Resume = req.file.path;
// }
exports.createEmployee = async (req, res) => {
  try {
    const Employee = await EmployeeService.createEmployee(req.body);
    res.json({ data: Employee, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEmployeeById = async (req, res) => {
  try {
    const Employee = await EmployeeService.getEmployeeById(req.params.id);
    res.json({ data: Employee, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const Employee = await EmployeeService.updateEmployee(req.params.id, req.body);
    res.json({ data: Employee, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const Employee = await EmployeeService.deleteEmployee(req.params.id);
    res.json({ data: Employee, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
