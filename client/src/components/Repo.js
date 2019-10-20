import React, { Component } from 'react';


export default class Repo extends Component {
  render() {
    const {reposchild,deletechild ,editrepo,isPrivate}=this.props
    const {_id,title,status,language}=this.props.repo

    return (
        
       <tr>
          <td >{_id}</td>
          <td >{title}</td>
          <td >{status.toUpperCase()}</td>
          <td ><input type="checkbox"
          onClick={editrepo.bind(this,_id)}
          checked={status === "Private"}
          /></td>
          <td >{status==="Private"?"YES":"NO"}</td>
          <td >{language}</td>
          <td><button onClick={deletechild.bind(this,_id)}>Delete</button></td>
          </tr> 
    );
  }
}

