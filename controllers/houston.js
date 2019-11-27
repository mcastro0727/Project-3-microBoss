const { Project, Profile } = require('../models');


module.exports = {
    // PROJECT METHODS
    findAllProjects: function(req,res) {
        Project
            .find(req.query)
            .sort({ startDate: -1 })
            .then(projects => res.json(projects))
            .catch(err => res.status(422).json(err))
    },
    findById: function(req,res) {
        Project
            .findById(req.params.id)
            .then(project => res.json(project))
            .catch(err => res.status(422).json(err))
    },
    create: function(req,res) {
        Project     
            .create(req.body)
            .then(project => res.json(project))
            .catch(err => res.status(422).json(err))
            
    },
    update: function(req,res) {
        Project
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(project => res.json(project))
            .catch(err => res.status(422).json(err))
    },
    remove: function(req,res) {
        Project
            .findById({ _id: req.params.id })
            .then(project => project.remove())
            .then(project => res.json(project))
            .catch(err => res.status(422).json(err))
    },
    //==============================================
    // PROFILE METHODS
    findAllProfiles: function(req,res) {
        Profile
            .find(req.query)
            .sort({ startDate: -1 })
            .then(profiles => res.json(profiles))
            .catch(err => res.status(422).json(err))
    },
    findProfileById: function(req,res) {
        Profile
            .findById(req.params.id)
            .then(profile => res.json(profile))
            .catch(err => res.status(422).json(err))
    },
    createProfile: function(req,res) {
        Profile     
            .create(req.body)
            .then(profile => res.json(profile))
            .catch(err => res.status(422).json(err))
    },
    updateProfile: function(req,res) {
        Profile
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(profile => res.json(profile))
            .catch(err => res.status(422).json(err))
    },
    removeProfile: function(req,res) {
        Profile
            .findById({ _id: req.params.id })
            .then(profile => profile.remove())
            .then(profile => res.json(profile))
            .catch(err => res.status(422).json(err))
    }       
}




/*
const getProfileWithProjects = (userName) => {
    return Profile.findOne({ userName: userName })
        .populate('projects')
        .exec((err, projects) => {
            console.log('Populated PROFILE: '+projects);
        });
};

const getProjectWithProfiles = (projName) => {
    return Project.findOne({ projectTitle: projName })
        .populate('profiles')
        .exec((err, profiles) => {
            console.log('Populated PROJECT: '+profiles);
        });
}

module.exports = { 
    getProfileWithProjects, 
    getProjectWithProfiles
 }
 */