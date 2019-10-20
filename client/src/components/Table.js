import React, { Component } from 'react';
import Repo from './Repo'


export default class Table extends Component {
  render() {
    const {reposparent,deleteparent,editrepo,isPrivate}=this.props
    return (
      <div >
        <table >
          <thead >
            <tr>
            <th >Number</th>
            <th >Title</th>
            <th >Repo Status</th>
            <th >Check</th>
            <th >Is Private</th>
            <th >Language</th>
            <th >Delete</th>
            </tr>
          </thead>
          <tbody style={{width:100%1}}>
          { 
          reposparent.map((repo,index)=>{
          return(
           <Repo key={index} repo={repo} reposchild={reposparent} deletechild={deleteparent} editrepo={editrepo} isPrivate={isPrivate} />
          )
            })

      }
      </tbody>
            
          
        </table>       
      </div>
    );
  }
}


