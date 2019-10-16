import React, { Component } from 'react';

export default class Repo extends Component {
  render() {
    const {repo, id, toggleStatus, remove} = this.props
    return (
      <tr>
        <th scope="row">{id}</th>
        <td>{repo.title}</td>
        <td>{repo.status}</td>
        <td><input type="checkbox" defaultChecked={repo.status === 'Private' ? true : false} onClick={() => toggleStatus(repo._id)}/></td>
        <td>{repo.status === "Private" ? 'YES' : 'NO'}</td>
        <td>{repo.language}</td>
        <td><button className="btn btn-danger" onClick={() => remove(repo._id)}>X</button></td>
      </tr>

    );
  }
}