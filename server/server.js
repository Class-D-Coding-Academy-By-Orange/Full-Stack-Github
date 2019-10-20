const express = require("express");
const cors = require("cors");
const DB = require('./db');
const app = express();
app.use(cors());
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});





// ______________ Read Repos_________________
app.get("/data", (req, res) => {
  DB.getRepos(result => {console.log('CALL BACK FROM SERVER');
  res.json(result);
});})


// ______________Delete Repos_________________
app.delete('/delete/:_id',(req,res)=> {
  DB.remove(result => {
    res.json(result)
  },req.params._id)
})

// ______________ Add Repos_________________

app.post('/add', (req, res) =>{
let repo = req.body;
console.log('REPO:', repo);
DB.insert(result => {
  console.log('CALL BACK FROM SERVER');
  res.json(result)
},repo);
});

// ______________Edit Repos_________________

app.put('/edit',(req, res) => {
  let check = req.body
  DB.edit(check,(result) => {
    res.json(result);
  })
  });

const PORT = 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));

//console.log("Noooor")


