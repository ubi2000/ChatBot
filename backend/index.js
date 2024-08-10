const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDb = require("./config/db");

const userRoutes = require("./routes/userRoutes");

const app = express();

//dotenv
dotenv.config();

//DB Connection
connectDb();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));


//user Routes

app.use("/user", userRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`app is running in ${process.env.DEV_MODE} on port ${PORT}`);
});
