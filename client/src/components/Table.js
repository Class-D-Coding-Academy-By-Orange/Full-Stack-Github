import React, { Component } from 'react';
import Repo from './Repo'

export default class Table extends Component {
  render() {
    //console.log(this.props.repos)
    const{repos}=this.props;

    let list=repos.map((repo,id) => (
      <Repo key={id} id={id} repo={repo}  deleteItem ={this.props.deleteItem} changeCheck={this.props.changeCheck}/>
    ));
    return (
      <div>
        <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Number</th>
      <th scope="col">Title</th>
      <th scope="col">Repo status</th>
      <th scope="col">Check</th>
      <th scope="col">is Private</th>
      <th scope="col">Language</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>


         <tbody>
{list}
</tbody>
 </table>
      </div>
    );
  }
}
