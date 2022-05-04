"use strict";

var express = require("express");

var path = require('path');

var app = express();

var userRouter = require('./routes/users');

var PORT = process.env.PORT || 5000;
app.get("/", function (req, res) {
  console.log('Hello I am starting to work server.js'); // res.send('greetings')
  // res.sendStatus(500)
  // res.status(500).send('You did something wrong cabrone')
  // res.status(500).json({ message: "Error"})
  // res.json({ message: "Error"})
  // res.download("server.js") 
  // res.render("index")
}); // app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static('public'))

app.use('/users', userRouter);
app.listen(PORT, function () {
  return console.log("Listening on port ".concat(PORT));
});