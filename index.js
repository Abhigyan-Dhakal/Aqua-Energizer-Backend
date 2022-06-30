// Requiring packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Connection string for connecting to mongodb
const dbURI =
  "mongodb+srv://abhigyan:abhigyan@aquaenergizer.omb234q.mongodb.net/aqua-energizer?retryWrites=true&w=majority";

// Asynchronously connecting to the database
mongoose
  .connect(dbURI)
  .then((result) => console.log("Connected to DB"))
  .catch((err) => console.log(err));

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/levels", require("./routes/levels"));

// Listening at a port for express server to run at
app.listen(PORT, () => {
  console.log("Server Listening at port: " + PORT);
});
