var express = require('express');
var router = express.Router();

var express = require("express"),
 router = express.Router(),
 gc = require("../models/gc.js"); // use the gc mongodb

var mongoose = require("mongoose");

var body = require('body-parser');
var request = require('request');

// check if this connects
mongoose.connect('mongodb://localhost/gcDB'); // Connects to a mongo database called "gcDB"

var db = mongoose.connection; // Saves the connection as a variable to use
db.on('error', console.error.bind(console, 'connection error:')); // Checks for connection errors
db.once('open', function () { // Lets us know when we're connected
  console.log('Connected');
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});

router
// CREATE
.post("/", function (req, res) {
  console.log("In db POST");
  var obj = req.body;
  var model = new user(obj);
  model.save(function (err) {
    if (err) {
      res.send("error");
      return;
    }
    res.send("created");
  });
})
// READ ALL
.get("/", function (req, res) {
  console.log("In db GET");
  gc.find({}, function (err, data) {
    if (err) {
      res.send("error");
      return;
    }
    res.send(data);
  });
})
// READ BY ID
.get("/:id", function (req, res) {
  console.log("In db GET by ID");
  var id = req.params.id;
  gc.find({ _id: id }, function (err, data) {
    if (err) {
      res.send("error");
      return;
    }
    res.send(data[0]);
  });
})
// UPDATE
.put("/:id", function (req, res) {
  console.log("In db PUT");
  var id = req.params.id;
  var obj = req.body;

  gc.findByIdAndUpdate(id, 
    { 
      speaker: obj.speaker, 
      title: obj.title, 
      session: obj.session, 
      upvotes: obj.upvotes,
      imageUrl: obj.imageUrl
    },
    function (err) {
      if (err) {
        res.send("error");
        return;
      }
      res.send("updated");
    });
})
// DELETE
.delete("/:id", function (req, res) {
  console.log("In db DELETE");
  var id = req.params.id;
  car.findByIdAndRemove(id, function (err) {
    if (err) {
      res.send("error");
      return;
    }
    res.send("deleted");
  });
});


module.exports = router;