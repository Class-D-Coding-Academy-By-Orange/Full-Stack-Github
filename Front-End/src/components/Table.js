import React, { Component } from 'react';
import Repo from './Repo';

export default class Table extends Component {
  render() {
    let repos = this.props.repos.map((repo, index) => <Repo key={repo._id} repo={repo} id={index+1} toggleStatus={this.props.toggleStatus} remove={this.props.remove}/>)
    return (
      <div>
        <table className="table table-hover mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Repo Status</th>
              <th scope="col">Check</th>
              <th scope="col">isPrivate</th>
              <th scope="col">Language</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {repos}
          </tbody>
        </table>

      </div>
    );
  }
}
