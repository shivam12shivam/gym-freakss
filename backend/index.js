const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const bodyParser = require("body-parser")
const aaah=process.env.PORT || 3000;

mongoose
  .connect(MONGO_URL, {
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(aaah, () => {
  console.log(`Server is listening on port 3000`);
});

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", authRoute);
