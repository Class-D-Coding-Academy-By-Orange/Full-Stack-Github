const express = require('express');
const cors = require('cors');


const DB = require('./database');


const app = express();
app.use(cors());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.json())



app.get('/data', (req, res) => {
    DB.getRepos(readrepos => {
      console.log('CALL BACK FROM SERVER');
      res.json(readrepos);
    });
  });




  app.delete(`/delete/:id`, (req, res) => {
    
    DB.removerepo(item=>{
      res.json(item);
    },req.params.id)
    });






    app.put(`/edit/:id`, (req, res) => {
      DB.updaterepo( item =>{
        res.json(item);
      },req.params.id)
           
         })
     






    app.post(`/addrepo`,(req,res)=>{
      console.log(req.body);
         let obj = req.body ;
    DB.insertrepo(repo => {
      console.log('CALL BACK FROM SERVER');
      res.json(repo);
    }, obj);
  }
    )

    
const PORT = 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));


// let newID = array.length
// let array =[
//     {
//       id: 0,
//       title: 'Array',
//       status: 'Private',
//       language: 'HTML',
      

//     },
//     {
//       id: 1,
//       title: 'Object',
//       status: 'Public',
//       language: 'JavaScript',
   

//     }
//   ]
//    let newID = array.length
  


