const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  user_name: { type: String, required: true },
  project_title: { type: String, required: true },
  start_date: { type: Date, default: Date.now },
  deadline_date: { type: Date }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
