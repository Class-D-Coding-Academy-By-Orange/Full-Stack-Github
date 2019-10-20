import React, { Component } from 'react';
import Table from './components/Table';
import Add from './components/Add';
import uuid from 'uuid'
import axios from 'axios'


export default class App extends Component {
  state = {
    repos: []
    // [
    //   {
    //     id: uuid(),
    //     title: 'Array',
    //     status: 'Private',
    //     language: 'HTML',
        

    //   },
    //   {
    //     id: uuid(),
    //     title: 'Object',
    //     status: 'Public',
    //     language: 'JavaScript',
     

    //   }
    // ],

  };

  



    deleterepo=(id)=>{
    axios.delete(`http://localhost:9000/delete/${id}`)
    .then((res)=>{
      const repos =res.data;
      this.setState({repos})
    })
    
  }
      

       


  addrepo=(item)=>{
 
    axios.post(`http://localhost:9000/addrepo`,{
      
      item      
      
    })
    .then(({data})=> {
      // console.log(response);
      this.setState({repos:data})
    })
    .catch(function (error) {
      console.log(error);
    }); 
    this.readrepo();
  }


 

  editrepo=(id)=>{
  
    axios.put(`http://localhost:9000/edit/${id}`)
    .then((res)=>{
      const repos =res.data;
      this.setState({repos})
    })
    }
            

  readrepo=()=>{
    axios.get(`http://localhost:9000/data`).then((res)=>{
      const repos =res.data;
      this.setState({repos})
  })}
                



                  // for execute readrepo function auto fronm start the program
  componentDidMount(){
    this.readrepo();
  }
                  // end execute



                  
  render() {
    const {repos}=this.state
    const {deleterepo,addrepo, editrepo,isPrivate}=this
    return (
      <div style={{ border: 'black 1px solid' }}>
        <Add addrepo={addrepo} reposadd={repos}/>
       <Table reposparent={repos} deleteparent={deleterepo} editrepo={editrepo} isPrivate={isPrivate} />
      {/* <button onClick={this.addrepo.bind(this,{id: 2,
        title: 'Object',
        status: 'Public',
        language: 'JavaScript'})}>AddItem</button> */}
          {/* <button onClick={getrepo}>Get repo</button> */}
      </div>
    );
  }
}
