import React, { Component } from 'react';
//=====================================================================================================//
export default class Add extends Component {
  state ={
    title : '',
    language : '',
    status :''
  }

//==============================Inputs and Dropdown change handling====================================//
  handleChange = e=>{
    console.log(e.target.value)
    this.setState({[e.target.name] : e.target.value})
    console.log(this.state)
  }
//=====================================Submition handling===============================================// 
  handleSubmit = e => {
    e.preventDefault();
    if(this.state.title === '' || this.state.language === ''){
      alert('Please fill title, language and status!  🤗💋')
    }
    else{
      e.preventDefault();
      this.props.add(this.state.title, this.state.language, this.state.status);
      this.setState({ title: "", language: '' , status : ''});
    }
   
  };
//=====================================================================================================//
  render() {
    return (
<div>
  <form onSubmit={this.handleSubmit}>
    <div className="container w-75 p-3">
        {/* Title input */}
        Title :<input 
        value={this.state.title} 
        onChange={this.handleChange} 
        name="title" 
        type="text" 
        className="form-control" 
        placeholder="Repo Title"/>
        {/* Language input */}
        Language :<input 
        value={this.state.language} 
        onChange={this.handleChange} 
        name="language" 
        type="text" 
        className="form-control" 
        placeholder="Language"/>
        <br/>
        {/* Status dropdown */}
        <select className="btn btn-secondary dropdown-toggle" name="status" value={this.state.status} onChange={this.handleChange}>
        <option hidden></option>
        <option value="Private">Private</option>
        <option value="Public">Public</option>
        </select>
        {/* Submit button */}
            <button style={{ float: 'right' }} type="submit" className="btn btn-secondary">➕</button>
    </div>
  </form>
</div>
    );
  }
}
