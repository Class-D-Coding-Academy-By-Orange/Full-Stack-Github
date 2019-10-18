//======================================Connection=============================================//
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Github-Project", {
  useNewUrlParser: true
});
const database = mongoose.connection;
database.on("error", function() {
  console.log("mongoose connection error");
  console.log("___________________________________________________________________");
});
database.once("open", function() {
  console.log("mongoose connected successfully");
  console.log("___________________________________________________________________");
});

//========================================Schema===============================================//
let reposSchema = new mongoose.Schema({
  title: String,
  status: String,
  language: String
});

let Repos = mongoose.model("repos", reposSchema);
//=========================================GET=================================================//

const get = callBack => {
  Repos.find({}, function(err, docs) {
    if (err) {
      console.log("ERROR:", err);
    }
    callBack(docs);
  });
};
//=========================================ADD=================================================//

const add = (callBack, obj) => {
  Repos.insertMany(
    [
      {
        title: obj.title,
        status: obj.status,
        language: obj.language
      }
    ],
    function(err) {
      if (err) {
        console.log("ERROR:", err);
      }
      get(callBack);
    }
  );
};
//==========================================DEL=================================================//

const del = (callBack, _id) => {
  Repos.findByIdAndDelete(_id, (err, removeTask) => {
    if (err) {
      console.log("ERROR :", err);
    }
    get(callBack);
  });
};
//=========================================EDIT=================================================//

const edit = (callBack, _id) => {
  Repos.findById(_id, (a, b) => {
    if (b.status === "Private") {
      Repos.findByIdAndUpdate(
        _id,
        { $set: { status: "Public" } },
        { new: true },
        err => {
          if (err) {
            console.log("ERROR :", err);
          }
          get(callBack);
        }
      );
    } else {
      Repos.findByIdAndUpdate(
        _id,
        { $set: { status: "Private" } },
        { new: true },
        err => {
          if (err) {
            console.log("ERROR :", err);
          }
          get(callBack);
        }
      );
    }
  });
};
//=====================================MODULE EXPORTS=============================================//

module.exports = {
  get,
  add,
  del,
  edit
};
