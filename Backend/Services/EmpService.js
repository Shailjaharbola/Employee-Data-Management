const EmployeeModel = require("../models/Empdb");
 
exports.getAllEmployees = async () => {
  return await EmployeeModel.find()
};
exports.getEmpAccDoB = async () => {
//   return await EmployeeModel.find().sort({ DoB: 'desc' })
  return await EmployeeModel.find().sort({"DoB": 1,"FirstName": 1})
};
exports.getEmpBonus = async () => {
  // const DOJ = "2022-09-2"
//   return await EmployeeModel.find().sort({ DoB: 'desc' })
  // return await EmployeeModel.find({ DoB:"1998-07-15" });
  // return await EmployeeModel.find({$subtract: [ Date.now, new Date("DOJ") ] });
  return await EmployeeModel.aggregate([{$project: {result:
    // {$divide :
    {$subtract:[{ $year: new Date() }, { $year: "$DOJ" }]}}},{$match: {result: {"$gt":1 }}}]);
};
// ,{$match: {result: {"$gt":5 }}}
// ,31556952000]}
exports.createEmployee = async (Employee) => {
  return await EmployeeModel.create(Employee);
};
exports.getEmployeeById = async (id) => {
  return await EmployeeModel.findById(id);
};
 
exports.updateEmployee = async (id, Employee) => {
  return await EmployeeModel.findByIdAndUpdate(id, Employee);
};
 
exports.deleteEmployee = async (id) => {
  return await EmployeeModel.findByIdAndDelete(id);
};