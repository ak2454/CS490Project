const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'build')));
// simple route
app.get("/", (req, res) => {
  //res.json({ message: "Welcome to bezkoder application." });
  res.sendFile(path.join(__dirname, 'build', '/index.html'));
  //res.sendFile(path.resolve('public/index.html')));
});

require("./app/routes/customer.routes.js")(app);

// set port, listen for requests
app.listen(3001, () => {
  console.log("Server is running on port 3001.");
});

