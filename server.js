//requiring the papckages/dependencies from package.json
const express = require("express");
const mongoose = require("mongoose");
//way to log things
const morgan = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//requiring static files in public folder
app.use(express.static("public"));

//connection to mongo database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
    useNewUrlParser: true,
    useFindAndModify: false
});

//requiring routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

//connection to port
app.listen(PORT, () => {
    console.log("App running on port ${PORT}!");
});