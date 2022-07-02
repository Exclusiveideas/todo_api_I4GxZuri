const express = require("express");
const routes = require("./routes/todo.js");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");


dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URL)
      .then(() => console.log("Database connected"))
      .catch((err) => console.log("error connecting to the database >>", err))

app.use(cors());
app.use(express.json());
app.use("/", routes);

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
