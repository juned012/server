const express = require("express");
const {
  addStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

const router = express.Router();

router.get("/students", getStudents);
router.post("/students", addStudent);
router.put("/students/:id", updateStudent);
router.delete("/students/:id", deleteStudent);

module.exports = router;
