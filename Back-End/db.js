const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/GitHub", {
  useNewUrlParser: true
});
const db = mongoose.connection;
db.on("error", function() {
  console.log("mongoose connection error");
  console.log("____________________________");
});
db.once("open", function() {
  console.log("mongoose connected successfully");
  console.log("____________________________");
});
let tasksSchema = new mongoose.Schema({
  title: String,
  status: String,
  language: String
});
let Tasks = mongoose.model("tasks", tasksSchema);

let getRepo = cb => {
  // console.log("GET TASKS FROM DATABASE");
  Tasks.find({}, function(err, docs) {
    if (err) {
      console.log("ERR:", err);
    }
    console.log("DOCS:", docs);
    cb(docs);
  });
};

let insertRepo = (cb, obj) => {
  // console.log("GET TASKS FROM DATABASE");
  Tasks.insertMany(
    [{ title: obj.title, status: obj.status, language: obj.language }],
    function(err, docs) {
      if (err) {
        console.log("ERR:", err);
      }
      console.log("DOCS:", docs);
      getRepo(cb);
    }
  );
};

let CheckRepo = (cb, ID) => {
  // console.log('ID: ', ID)
  Tasks.findOne({ _id: ID }, function(err, docs) {
    if (err) {
      console.log("ERR:", err);
    } else {
      Tasks.updateOne(
        { _id: ID },
        { $set: { status: docs.status === "Private" ? "Public" : "Private" } },
        function(err, docs) {
          if (err) {
            console.log("ERR:", err);
          } else {
            console.log("DOCS:", docs);
            getRepo(cb);
          }
        }
      );
    }

    // getRepo(cb);
  });
};

let deleteRepo = (cb, ID) => {
  console.log("ID: ", ID);
  Tasks.deleteOne({ _id: ID }, function(err, docs) {
    if (err) {
      console.log("ERR:", err);
    }
    console.log("DOCS:", docs);
    getRepo(cb);
  });
};

module.exports = {
  Repo: getRepo,
  insert: insertRepo,
  remove: deleteRepo,
  check: CheckRepo
};
