const db = require("../models");

// Defining methods for the ProjectsController
module.exports = {
  findAll: function(req, res) {
    res.send("/api/project: GET");
    // db.Project
    // .find(req.query)
    // .sort({ date: -1 })
    // .then(dbModel => res.json(dbModel))
    // .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    res.send("/api/project/:id:get");
    // db.Project
    //   .findById(req.params.id)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    res.send("/api/project:post");
    // db.Project
    //   .create(req.body)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    res.send("/api/project/id: put");
    // db.Project
    //   .findOneAndUpdate({ _id: req.params.id }, req.body)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    // db.Project
    //   .findById({ _id: req.params.id })
    //   .then(dbModel => dbModel.remove())
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  }
};
