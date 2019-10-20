import React, { Component } from 'react';

export default class Repo extends Component {

  render() {
    //console.log(this.props.repo)
    const{repo}=this.props
    return ( 
      <>     
       
       {/* <table className="table table-hover">
         <tbody> */}
    <tr>
      <th scope="row">{repo.id}</th>
      <td>{repo.title}</td>
      <td>{repo.status}</td>
      <td><input type='checkbox' defaultChecked={repo.status==='Private'?true:false} onClick={this.props.changeCheck.bind(this,repo._id)}/></td>
      <td>{repo.status==='Private'?'YES':'NO'}</td>
      <td>{repo.language}</td>
      <td><button className='btn btn-danger' onClick={this.props.deleteItem.bind(this,repo._id)} >x</button></td>

    </tr>
    
    {/* </table> */}

      </>
    );
  }
}