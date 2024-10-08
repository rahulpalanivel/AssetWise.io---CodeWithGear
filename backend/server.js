const express = require("express");
const dotenv = require("dotenv").config();
const connectdb = require("./config/dbConnection.js");
const errorHandler = require("./middleware/errorHandler.js");

connectdb();
const app = express();

const port = process.env.PORT || 4451;

app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
