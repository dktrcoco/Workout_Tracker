//requiring path dependency
const path = require("path");

//requiring the router method
const router = require("express").Router()

//landing page
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//exercise page
router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//stats page
router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

//exporting for other files to use
module.exports = router;