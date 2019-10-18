import React from "react";
import '../App.css';

//=====================================================================================================//
const Repo = ({ rep, del, id, toggle }) => (
  <tbody className="fontie">
    <tr>
      <td>{id}</td>
      <td>{rep.title}</td>
      <td>{rep.language}</td>
      <td>{rep.status}</td>
      <td>
        <input
          checked={rep.status === "Private" ? true : false}
          onChange={toggle.bind(this, id)}
          type="checkbox"
        />
      </td>
      <td>{rep.status === "Private" ? "YES" : "NO"}</td>
      <td>
        <button className="btn btn-danger" onClick={del.bind(this, id)}> 🗑️ </button>
      </td>
    </tr>
  </tbody>
);
export default Repo;
