const express = require("express");
const { errorHandler } = require("./middlewares/error");
const { connectDB } = require("./config/db");
require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();

connectDB()

// Apply middle-wares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", require("./routes/users"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
