let students = [
  { id: 1, name: "John Doe", age: 20, city: "New York" },
  { id: 2, name: "Jane Smith", age: 22, city: "Los Angeles" },
  { id: 3, name: "Alice Johnson", age: 19, city: "Chicago" },
];

const addStudent = (req, res) => {
  console.log("Received request body:", req.body);

  if (!req.body.name || !req.body.age || !req.body.city) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newStudent = { id: students.length + 1, ...req.body };
  students.push(newStudent);
  console.log("Updated students array:", students);

  res
    .status(201)
    .json({ message: "Student added successfully", student: newStudent });
};

const getStudents = (req, res) => {
  res.status(200).json(students);
};

const updateStudent = (req, res) => {
  const index = students.findIndex((s) => s.id === parseInt(req.params.id));
  if (index === -1)
    return res.status(404).json({ message: "Student not found" });

  students[index] = { ...students[index], ...req.body };
  res.status(200).json({
    message: "Student updated successfully",
    student: students[index],
  });
};

const deleteStudent = (req, res) => {
  const index = students.findIndex((s) => s.id === parseInt(req.params.id));
  if (index === -1)
    return res.status(404).json({ message: "Student not found" });

  students.splice(index, 1);
  res.status(200).json({ message: "Student deleted successfully" });
};

module.exports = { addStudent, getStudents, updateStudent, deleteStudent };
