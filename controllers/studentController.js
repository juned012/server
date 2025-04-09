let students = [
  { id: 1, name: "John Doe", age: 20, city: "New York" },
  { id: 2, name: "Jane Smith", age: 22, city: "Los Angeles" },
  { id: 3, name: "Alice Johnson", age: 19, city: "Chicago" },
];

const addStudent = (req, res) => {};

const getStudents = (req, res) => {
  res.status(200).json(students);
};

const deleteStudent = (req, res) => {};

module.exports = { addStudent, getStudents, updateStudent, deleteStudent };
