const db = require("../models");

// Defining methods for the ProjectsController
controller = {
  findAll: function(req, res) {
    db.Project.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("create");
    res.send("/api : Post");
  },
  findById: function(req, res) {
    res.send("/api/:id : Get");
  },
  update: function(req, res) {
    res.send("/api/:id : Put");
  },
  remove: function(req, res) {
    res.send("/api/:id : Delete");
  }
};
module.exports = controller;
