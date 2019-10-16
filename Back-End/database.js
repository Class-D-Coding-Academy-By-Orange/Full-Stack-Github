const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/github", {
  useNewUrlParser: true
});
const db = mongoose.connection;

db.on("error", function() {
  console.log("CONNECTION FAILED");
});
db.once("open", function() {
  console.log("CONNECTION SUCCESS");
});

const repositoriesSchema = new mongoose.Schema({
  title: String,
  status: String,
  language: String
});
const Repositories = mongoose.model("repositories", repositoriesSchema);

const getRepos = sendReposFunction => {
  Repositories.find({}, (err, docs) => {
    if (err) {
      console.log("ERR:", err);
    } else {
      sendReposFunction(docs);
    }
  });
};

const addRepo = (sendReposFunction, title, status, language) => {
  Repositories.create({ title, status, language }, err => {
    if (err) {
      console.log("ERR:", err);
    } else {
        getRepos(sendReposFunction);
    }
  });
};

const removeRepo = (sendReposFunction, id) => {
  Repositories.deleteOne({ _id: id }, err => {
    if (err) {
      console.log("ERR:", err);
    } else {
        getRepos(sendReposFunction);
    }
  });
};

const toggleRepo = (sendReposFunction, id) => {
  Repositories.findOne({ _id: id }, (err, doc) => {
    if (err) {
      console.log("ERR:", err);
    } else {
      let status = "";
      if (doc.status === "Private") {
        status = "Public";
      } else {
        status = "Private";
      }
      Repositories.updateOne({ _id: id }, { $set: { status } }, err => {
        if (err) {
          console.log("ERR:", err);
        } else {
            getRepos(sendReposFunction);
        }
      });
    }
  });
};

module.exports = {
  getRepos,
  addRepo,
  removeRepo,
  toggleRepo
};
