const employeeCtrl = {};
const Employee = require("../models/employee");

employeeCtrl.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
}

employeeCtrl.createEmployee = () => {

}


employeeCtrl.getEmployee = () => {

}

employeeCtrl.editEmployee = () => {

}

employeeCtrl.deleteEmployee = () => {

}


module.exports = employeeCtrl;
