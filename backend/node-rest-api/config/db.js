const mongoose = require("mongoose");
const colors = require("colors");

mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Mongo connected to ${conn.connection.host}:${conn.connection.port}`.green
        .underline
    );
  } catch (error) {
    console.log(error.toString().red.underline);
    process.exit(1);
  }
};

module.exports = {
  connectDB,
};
