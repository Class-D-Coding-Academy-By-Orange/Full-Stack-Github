import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Table from './components/Table';
import Add from './components/Add';
import axios from 'axios'


export default class App extends Component {
  state = {
    repos: [ ]
  };


  componentDidMount(){
    axios.get('http://localhost:9000/data')
    .then(({data})=>{
      // console.log(data)
      this.setState({
        repos : data
      })
    })
  }

  deleteItem = _ID => {
    // const axios = require("axios");
    axios.delete(`http://localhost:9000/delete/${_ID}`).then(({data})=>{this.setState({repos : data}) ;console.log('id' ,_ID);})
    
    .catch(error => {
    // handle error
    console.log(error);
  });
};

  addRepo = (title,status,language) => {
   
    axios.post(`http://localhost:9000/add`,{title,status,language})
    .then((res)=>{
      this.setState({
        repos : res.data
      })
      //console.log('id' ,ID);
    })

  .catch(error => {
    // handle error
    console.log(error);
  });

  };


  changeCheck = (obj) => {
    console.log('obj : ', obj)
    axios.put(`http://localhost:9000/edit`,obj)
    .then((res)=>{
      this.setState({
        repos : res.data
      })
    })

  .catch(error => {
    // handle error
    console.log(error);
  });
    
  }

  render() {
    const {repos} = this.state;
    return (
      <div  className='container border border-secondary  ' >
        <div className='p-1 mb-4 bg-dark text-white'>
        <h2 className='text-center '>App</h2>
        </div>
        <Add  addRepo={this.addRepo} repos={repos} />
        <Table repos={repos} deleteItem={this.deleteItem}  changeCheck={this.changeCheck} />
      </div>
    );
  }
}
