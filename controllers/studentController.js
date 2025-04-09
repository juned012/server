let students = [
  { id: 1, name: "John Doe", age: 20, city: "New York" },
  { id: 2, name: "Jane Smith", age: 22, city: "Los Angeles" },
  { id: 3, name: "Alice Johnson", age: 19, city: "Chicago" },
];

const addStudent = (req, res) => {
  try {
    const { name, age, city } = req.body;
    const newStudent = { id: students.length + 1, name, age, city };
    students.push(newStudent);
    res.status(200).json({
      message: "Student Added Successfully",
      newStudent,
    });
  } catch (error) {
    res.status(500).json({
      message: "Student not Added",
      error: error.message,
    });
  }
};

const getStudents = (req, res) => {
  try {
    if (!students) {
      return res.status(404).json({
        message: "No Student, Add a Student",
      });
    }
    res.status(200).json({
      message: "Student Founded",
      students,
    });
  } catch (error) {
    res.status(500).json({
      message: "Student not found",
      error: error.message,
    });
  }
};

const deleteStudent = (req, res) => {
  try {
    const { id } = req.params;
    const index = students.findIndex((std) => std.id === id);
    students.splice(index, 1);
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Student not able to Delete",
      error: error.message,
    });
  }
};

module.exports = { addStudent, getStudents, deleteStudent };
