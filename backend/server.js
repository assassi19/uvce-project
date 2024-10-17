const express = require("express");
const connectDB = require("./connection");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// middlewares
app.use(express.json());

// database connection
connectDB(
  "mongodb+srv://mhrithik450:9YZYeylSlrsmk2J7@hruthik.sif61.mongodb.net/library"
)
  .then(() => console.log("mongoose connected"))
  .catch((err) => console.error(err));

app.listen(process.env.PORT, () => {
  console.log(`Server Started at ${5000}`);
});
