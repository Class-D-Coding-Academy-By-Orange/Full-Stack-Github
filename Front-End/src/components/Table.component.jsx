import React from "react";
import Repo from "./Repo.component";
import '../App.css';

//=====================================================================================================//
const Table = ({ repos, del, toggle }) => (
  <div >
    <table className="table table-hover  table-striped table-dark">
      <thead className="color thead-dark">
        <tr className="fontie">
          <th scope="col">ID</th>
          <th scope="col">Repository name</th>
          <th scope="col">Repository language</th>
          <th scope="col">Status</th>
          <th scope="col">Check</th>
          <th scope="col">isPrivate</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      {repos.map((rep, i) => (
        <Repo toggle={toggle} del={del} rep={rep} key={i} id={rep._id} />
      ))}
    </table>
  </div>
);
export default Table;
