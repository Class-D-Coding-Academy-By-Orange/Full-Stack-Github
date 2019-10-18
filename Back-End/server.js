const express = require("express");
const cors = require("cors");
const app = express();
const database = require("./database");

//==============================================================================================//
app.use(cors());
app.use(express.json());
//=======================================GET DATA===============================================//
app.get("/", (req, res) => {
  console.log("SERVER hehe");
});

app.get("/data", (req, res) => {
  database.get(result => res.json(result));
});
//=======================================ADD DATA===============================================//
app.post("/add", (req, res) => {
  let info = req.body;
  database.add(result => res.json(result), info);
});
//======================================Edit DATA===============================================//
app.get("/edit/:ID", (req, res) => {
  database.edit(result => res.json(result), req.params.ID);
});
//=====================================Delete DATA==============================================//
app.delete("/delete/:_id", (req, res) => {
  database.del(result => res.json(result), req.params._id);
});
//===================================PORT LISTENING=============================================//
const PORT = 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
