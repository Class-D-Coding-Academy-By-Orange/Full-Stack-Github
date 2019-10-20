const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gitHub', {
  useNewUrlParser: true
});



const db = mongoose.connection;
db.on('error', function() {
  console.log('mongoose connection error');
  console.log('____________________________');
});
db.once('open', function() {
  console.log('mongoose connected successfully');
  console.log('____________________________');
});



let reposSchema = new mongoose.Schema({
    
    title: String,
    language: String,
    status:String,
 
 });



  let Repos = mongoose.model('repos', reposSchema);





  let getRepos = cb => {
    Repos.find({}, function(err, docs) {
      if (err) {
        console.log('ERR:', err);
      }
      console.log('DOCS:', docs);
      cb(docs);
    });
  };





  let insertrepo =(cb,obj)=>{
    console.log('OBJ',obj);
    Repos.insertMany(
      [
        {title:obj.item.title,
      language:obj.item.language,
    status:obj.item.status

  }
  ],
    function(err,docs){
      if(err){
        console.log("ERR:",err)
      }
      console.log("DOCS:", docs);
      getRepos(cb);
    }
    )
  }




  let updaterepo = (cb,id)=>{
    Repos.findOne({_id:id},(err,docs)=>{
      if(err){
        console.log("Err:",err)
      }

      Repos.updateOne(
        {_id:id},
        { $set: { status: docs.status === "Private" ? "Public" : "Private" } },

        err => {
          if (err) {
            console.log("ERR : ", err);
          } else {
            getRepos(cb);
          }
        }
      )
    })
  }


  let removerepo =(cb,id)=>{
      // console.log('ID:', ID);

    Repos.deleteOne(
      {_id:id},
      (err,data)=>{
        if(err){
          console.log('ERR:', err);
        }
        getRepos(cb);
      }
    )
  }


  module.exports = {
    getRepos,
    insertrepo,
    removerepo,
    updaterepo
  };