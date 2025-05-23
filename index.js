const express = require("express");
const studentRoutes = require("./routes/studentRoute.js");
const cors = require("cors");

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

app.use("/api", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
