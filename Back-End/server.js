const express = require("express");
const cors = require("cors");
const DB = require("./db");

const app = express();
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// to run req.body
app.use(express.json());

app.get("/", (req, res) => {
  // let x = 2 * 2;
  res.json("server is working");
});
// Get all Database
app.get("/data", (req, res) => {
  DB.Repo(repo => {
    res.json(repo);
  });
});

app.post("/addrepo", (req, res) => {
  // res.json(array);
  // console.log("REQ :", req.body);
  // let newTask = {
  //   id: ++newId,
  //   title: req.body.title,
  //   status: req.body.status,
  //   language: req.body.language
  // };
  // console.log("newArray:", newTask);
  // DB.push(newTask);
  let object = req.body;
  DB.insert(repo => {
    res.json(repo);
  }, object);
});

app.put("/check/:id", (req, res) => {
  DB.check(ck => {
    res.json(ck);
  }, req.params.id);

  // console.log("REQ: ", req.params.id);
  // let id = parseInt(req.params.id);
  // // console.log('id: ', id)
  // DB = DB.map((elem, i) => {
  //   console.log("elem.id", elem.id);
  //   if (elem.id === id) {
  //     if (elem.status === "Private") {
  //       elem.status = "Public";
  //     } else {
  //       elem.status = "Private";
  //     }
  //   }
  //   return elem;
  // });
  // res.json(DB);
});

app.delete("/delete/:id", (req, res) => {
  // let id = parseInt(req.params.id);
  // DB = DB.filter((elem, i) => {
  //   return id !== elem.id;
  // });
  // res.json(DB);
  // console.log('delete',req.params.id)

  DB.remove(del => {
    res.json(del);
  }, req.params.id);
});

const PORT = 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));

// let DB = [
//   {
//     id: 1,
//     title: "Array",
//     status: "Private",
//     language: "HTML"
//   },
//   {
//     id: 2,
//     title: "Object",
//     status: "Public",
//     language: "JavaScript"
//   },
//   {
//     id: 3,
//     title: "Array",
//     status: "Private",
//     language: "CSS"
//   }
// ];

// let newId = DB.length;

/*



// app.use(express.json());

const PORT = process.env.PORT || 9000;


*/
