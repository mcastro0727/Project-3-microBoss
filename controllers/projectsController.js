const db = require("../models");

// Defining methods for the ProjectsController
controller = {
  findAll: function(req, res) {
    console.log("findall");
    // res.send("/api : Get");
    db.Project.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("create");
    res.send("/api/projects : Post");
  },
  findById: function(req, res) {
    res.send("/api/projects/:id : Get");
  },
  update: function(req, res) {
    res.send("/api/project/:id : Put");
  },
  remove: function(req, res) {
    res.send("/api/project/:id : Delete");
  }
};
module.exports = controller;
