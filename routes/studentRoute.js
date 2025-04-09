const express = require("express");
const {
  addStudent,
  getStudents,
  deleteStudent,
} = require("../controllers/studentController");

const router = express.Router();

router.get("/students", getStudents);
router.post("/students", addStudent);
router.delete("/students/:id", deleteStudent);

module.exports = router;
