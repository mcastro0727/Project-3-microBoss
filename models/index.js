const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;


// const ProfileSchema = new Schema({
    
//     userName: ObjectId,
//     passWord: '',
//     occupation: '',
//     Projects : [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Project"
//     }]

// });

const ProfileSchema = new Schema({
    
    userName: { type : String, required: true},
    passWord: { type : String, required: true},
    occupation: { type : String, required: true}
    /*
    Projects : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    }]
    */
});

const ProjectSchema = new Schema({
    projectTitle: String,
    /*
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile"
    },
    */
   creator: { type: String, required: true },
    startDate: { type: String, required: true },
    deadLine: { type: String, required: true },
    todos: { type: String, required: true },
    assignee: { type: String, required: true }
});



const Project = mongoose.model("Project", ProjectSchema, "projects");
const Profile = mongoose.model("Profile", ProfileSchema, "profiles");

module.exports = {
    Profile, Project
}

