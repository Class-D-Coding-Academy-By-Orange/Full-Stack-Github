import React, { Component } from 'react';

export default class Add extends Component {
  state={
    title:"",
    language:"",
    status:""
  };

  addNewRepo=()=>{
    // let newRepos={id:1,title:this.state.title, status:this.state.status,language:this.state.language};
    // this.props.addRepo(newRepos)
    this.props.addRepo(this.state.title,this.state.status,this.state.language)
    this.setState({
     title:"", language:"",status:""
   })
    }
    handleChange = (event)=>{
      this.setState({
        title: event.target.value
      })
      //console.log(this.state.title);
    }
    handleChangelang = (event)=>{
     this.setState({
       language: event.target.value
      
     })
     
     //console.log(this.state.language);                                             
   }
   
   changeStatus=(event)=>{
     this.setState({
       status: event.target.value
      
     })
    }

  render() {
    return (
      <div className='text-center' >
        {/* <h6>Add</h6> */}
        {/* <form> */}
        <div className="form-group">
        <input className="form-control" type="text"  
        placeholder="Enter Repo title" value={this.state.title}
        onChange= {this.handleChange}  />
        </div>
        <div className="form-group">
        <input className="form-control" type="text"  
        placeholder="Enter Repo language" value={this.state.language} 
        onChange= {this.handleChangelang} />
        </div>
        <select className="form-control" name="status" value={this.state.status} onChange={this.changeStatus} >
        <option defultvalue='selected disabled hidden'>Repo Status(Private/Public)</option>
            <option value="Private">Private</option>
            <option value="Public">Public</option>
           
          </select>
          <button type="submit" className='btn btn-success mt-4 mb-4 ' onClick={this.addNewRepo} > Add Repo</button>
        {/* </form> */}
      </div>
    );
  }
}
