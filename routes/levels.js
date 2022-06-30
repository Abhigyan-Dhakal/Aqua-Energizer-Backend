const router = require("express").Router();
const Level = require("../models/level");

// POST API endpoint to save the map into the database
router.post("/", (req, res) => {
  // Destructuring the data sent from the request
  const { map } = req.body;

  // Creating new instance based on the created level schema
  const level = new Level({
    map: map,
  });

  // Saving the data
  level
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// GET API route to fetch all the map details from database
router.get("/", (req, res) => {
  Level.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
