const express = require("express");
const router = express.Router();

//@route GET api/cards
//@desc Test route
//@access Public
router.get("/", (req, res) => {
  res.send("Cards Route");
});

module.exports = router;
