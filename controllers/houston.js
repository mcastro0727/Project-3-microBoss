const db = require("../models");

// Defining methods for the ProjectsController
controller = {
  // SIGMA(get)
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
  // GET / the /:id for the api
  findById: function(req, res) {
    db.Project
    .findById(req.params)
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    }).catch(err => res.status(500).json(err));
    res.send("/api/:id : Get");
  },
  update: function(req, res) {
    db.Project
      .findByIdAndUpdate(req.params)
      .exec()
      .then(resu => {
        console.log(resu);
        res.status(200).json(resu);
      }).catch(err => res.status(500).json(err));
    res.send("/api/:id : Put");
  },
  remove: function(req, res) {
    const id = req.params.id;
    db.Project
      .remove({ _id: id })
      .exec()
      .then(result => {
        res.status(200).json(result)
      }).catch(err => res.status(500).json(err));
    res.send("/api/:id : Delete");
  }
};
module.exports = controller;
