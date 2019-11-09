// const db = require("../models");

// Defining methods for the ProjectsController
module.exports = {
  findAll: function(req, res) {
    console.log("findall")
    res.send("/api/projects : Get");
  },
  create: function(req, res) {
    console.log("create")
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
