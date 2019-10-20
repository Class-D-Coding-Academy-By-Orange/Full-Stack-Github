const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gitHubProject', {
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
    status: String,
    language: String,
    
     
  });

  let Repo = mongoose.model('repo', reposSchema);
// ______________ Read Repos_________________

  let getRepos = cb => {
    console.log('GET TASKS FROM DATABASE');
    Repo.find({},function(err, docs) {
      if (err) {
        console.log('ERR:', err);
        cb(err);
      }else{
        console.log('DOCS:', docs);
        cb(docs);
      }
    });
  }; 

// ______________ Add Repos_________________


  let insertRepos =(cb,obj) => {
      Repo.insertMany([{title: obj.title,status: obj.status,language: obj.language}],(err,docs) => {
          if (err){
              cb(err);
              console.log('ERR:', err);
          }else {
            console.log('DOCS:', docs);
            getRepos(cb)
          }
      })
  }

// ______________Delete Repos_________________


  let removeRepos = (cb,_ID) =>{
      Repo.findByIdAndRemove(_ID,(err,docs)=>{
          if (err){
            cb(err);
            console.log('ERR:', err);
          }else{
            console.log('DOCS:', docs);
            getRepos(cb);
          }
      })
  }


// ______________Edit Repos_________________

  let editRepos = ( check,cb ) => {
      if(check.status==='Private'){
        Repo.findByIdAndUpdate(check._id,{$set:{status:"Public"}},
        {new:true},
        (err,docs) => {
            if(err){
                cb(err);
                console.log('ERR:', err);
            }else{
            console.log('DOCS:', docs);
            getRepos(cb);
            }
        }
        
        );
      }
      else
      {
        Repo.findByIdAndUpdate(check._id,{$set:{status:"Private"}},
        {new:true},
        (err,docs) => {
            if(err){
                cb(err);
                console.log('ERR:', err);
            }else{
            console.log('DOCS:', docs);
            getRepos(cb);
            }
        

      }
        );


  }
}
  
  module.exports={
      getRepos: getRepos,
      insert: insertRepos,
      remove: removeRepos,
      edit: editRepos
  }
