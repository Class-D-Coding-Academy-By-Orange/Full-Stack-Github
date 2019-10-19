import React, { Component } from "react";

export default class Repo extends Component {
  deleteItem = () => {
    this.props.deleteT(this.props.elem._id);
  };

  // check = e => {
  //   // console.log(e);
  //   this.props.getid(this.props.elem.id);
  // };

  render() {
    const { props, deleteItem } = this;
    const { elem, getid } = props;
    return (
      <tr style={{ border: "3px red solid" }}>
        {/* <td>{elem.id}</td> */}
        <td>{elem.title}</td>
        <td style={{ textTransform: "uppercase" }}>{elem.status}</td>
        <td>
          <input
            type="checkbox"
            checked={elem.status === "Public" ? false : true}
            onChange={() => getid(elem._id)}
          />
        </td>

        <td>{elem.status === "Public" ? "NO" : "YES"}</td>
        <td>{elem.language}</td>
        <td>
          <button onClick={deleteItem}>X</button>
        </td>
      </tr>
    );
  }
}
