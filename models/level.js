const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Defining a new schema for game level
const levelSchema = new Schema(
  {
    map: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

// Creating a new model based on the defined schema
const Level = mongoose.model("Level", levelSchema);

module.exports = Level;
