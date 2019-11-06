const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const projectSeed = [
  {
    user_name: "John Doe",
    project_title: "Google AdWords Campaign",
    start_date: new Date(Date.now()),
    deadline_date: new Date(Date)
  },
  // JOHN && JANE working on the same project
  {
    user_name: "Jane Doe",
    project_title: "Google AdWords Campaign",
    start_date: new Date(Date.now()),
    deadline_date: new Date(Date)
  },
  {
    user_name: "Elon Musk",
    project_title: "Colonize Mars",
    start_date: new Date(Date.now()),
    deadline_date: new Date(Date)
  },
  {
    user_name: "Bobby Schmurda",
    project_title: "Get out of jail",
    start_date: new Date(Date.now()),
    deadline_date: new Date(Date)
  },
  {
    user_name: "Edward Snowden",
    project_title: "Expose NSA surveillance",
    start_date: new Date(Date.now()),
    deadline_date: new Date(Date)
  },
  {
    user_name: "Julian Assange",
    project_title: "Re-launch Wikileaks",
    start_date: new Date(Date.now()),
    deadline_date: new Date(Date)
  }
  
];

db.Project
  .remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
