const { Op } = require("sequelize");
const Employee = require("../models/employee");

const router = require("express").Router();

router
  .route("/employees")
  .get(async (req, res) => {
    try {
      const { minSalary, simplified, sortBy, sortOrder } = req.query;
      const requiredName = req.query.name;
  
      const where = {};
      if (minSalary) where.salary = { [Op.gt]: minSalary };
      if (requiredName) where.firstName = requiredName;
  
      const order = sortBy ? [[sortBy, sortOrder || 'ASC']] : undefined;
  
      const employees = await Employee.findAll({
        where, 
        attributes: simplified ? { exclude: "id" } : undefined,
        order: order, 
      });
  
      return res.status(200).json(employees);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

router
  .route("/employees/:id")
  .get(async (req, res) => {
    try {
      const employee = await Employee.findByPk(req.params.id);
      if (employee) {
        return res.status(200).json(employee);
      } else {
        return res
          .status(404)
          .json({ error: `Employee with id ${req.params.id} not found` });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  })
  .put(async (req, res) => {
    try {
      const employee = await Employee.findByPk(req.params.id);
      if (employee) {
        const updateEmployee = await employee.update(req.body);
        return res.status(200).json(updateEmployee);
      } else {
        return res
          .status(404)
          .json({ error: `Employee with id ${req.params.id} not found` });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  })
  .delete(async (req, res) => {
    try {
      const employee = await Employee.findByPk(req.params.id);
      if (employee) {
        await employee.destroy();
        return res.status(200).json({ message: "Employee deleted" });
      } else {
        return res
          .status(404)
          .json({ error: `Employee with id ${req.params.id} not found` });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  });

module.exports = router;