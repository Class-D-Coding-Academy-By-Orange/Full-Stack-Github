import React, { Component } from 'react';
import uuid from 'uuid'

export default class Add extends Component {

  state={
      title:"",
      lang:"",
      status:"",

  }

  changeTitle=(event)=>{
    let newTitle=event.target.value
    this.setState({title:newTitle})
  }

  changeLang=(event)=>{
    let newLang=event.target.value
    this.setState({lang:newLang})
  }

  changeSelect=(event)=>{
    let newstatus =event.target.value
    this.setState({status:newstatus})
  }
  

  moveItem = () => {
    this.props.addrepo(this.state);
    this.setState({
      title:"",
      lang:"",
      status:""
    });
  };

  render() {
    const {changeTitle,changeLang,changeSelect,moveItem}=this
    const {addrepo,reposadd}=this.props
    return (
      <div >
        <input  name="title" placeholder="Repo Title" value={this.state.title} onChange={changeTitle} />
        <input name="language" placeholder="Repo Language" value={this.state.lang} onChange={changeLang} />
        <select name="status" value={this.state.status} onChange={changeSelect}  >
            <option selected  hidden >Choose</option>
            <option value="Private" >Private</option>
            <option value="Public" >Public</option>
            
          </select>


 <button  onClick={()=>{
      addrepo({id: reposadd.id=uuid(),
        title: this.state.title,
        status: this.state.status ,
        language: this.state.lang} )
           this.setState({title:"",lang:"",status:""})
                   }
                } >Add New Repo</button> 
        <hr/>
      </div>
    );
  }
}
