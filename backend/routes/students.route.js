const express = require("express");
const {
  getStudentList,
  getStudentDetailsById,
  updateStudentDetails,
  createStudentDetails,
} = require("../controllers/students.controller");

const studentsRouter = express.Router();

studentsRouter.get("/students", getStudentList);

studentsRouter.get("/student/:studentId", getStudentDetailsById);

studentsRouter.put("/student/:studentId", updateStudentDetails);

studentsRouter.post("/student/enrollstudent", createStudentDetails);


module.exports = { studentsRouter };
