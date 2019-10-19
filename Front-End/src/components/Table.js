import React, { Component } from "react";
import Repo from "./Repo";

export default class Table extends Component {
  render() {
    const { repos, del, check } = this.props;
    return (
      <div style={{ border: "3px green dotted", backgroundColor: "#f5f5f5" }}>
        <h6>Table</h6>
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Repo Status</th>
              <th>Check</th>
              <th>Is Private</th>
              <th>Language</th>
              <th>Delete</th>
            </tr>
            {repos.map((elem, i) => {
              return <Repo elem={elem} key={i} deleteT={del} getid={check} />;
            })}
          </thead>
        </table>
      </div>
    );
  }
}
