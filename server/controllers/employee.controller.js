const employeeCtrl = {};
//const Employee = require("../models/employee");

// employeeCtrl.getEmployees = async (req, res) => {
//   const employees = await Employee.find();
//   res.json(employees);
// }

employeeCtrl.getEmployees = (req, res) => {
  res.json({
    status: "Employees goes here"
  });
}

// employeeCtrl.createEmployee = () => {
//
// }
//
// employeeCtrl.getEmployees = () => {
//
// }
//
// employeeCtrl.getEmployee = () => {
//
// }
//
// employeeCtrl.editEmployee = () => {
//
// }
//
// employeeCtrl.deleteEmployee = () => {
//
// }


module.exports = employeeCtrl;
