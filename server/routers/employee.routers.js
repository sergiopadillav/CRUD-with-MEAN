const express = require('express');
const router = express.Router();

const employee = require ("../controllers/employee.controller")

router.get("/", employee.getEmployees);
// router.get("/", employee.getEmployee);
// router.post("/", employee.createEmployee);
// router.put("/", employee.editEmployee);
// router.delete("/", employee.deleteEmployee);

module.exports = router;
