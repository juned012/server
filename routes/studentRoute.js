const express = require("express");
const {
  addStudent,
  getStudents,
  deleteStudent,
  updateStudent,
} = require("../controllers/studentController");

const router = express.Router();

router.get("/students", getStudents);
router.post("/students", addStudent);
router.delete("/students/:id", deleteStudent);
router.put("/students/:id", updateStudent);

module.exports = router;
