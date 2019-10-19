import React, { Component } from "react";

export default class Add extends Component {
  state = {
    title: "",
    status: "",
    language: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
      // [e.target.name]: e.target.value,
      // [e.target.name]: e.target.value
    });
    // console.log(e.target.value);
  };

  moveItem = () => {
    this.props.addItem(this.state);
    this.setState({
      title: "",
      status: "",
      language: ""
    });
  };

  render() {
    return (
      <div style={{ border: "3px orange solid" }}>
        <h6>Add</h6>

        <input
          type="text"
          value={this.state.title}
          name="title"
          onChange={this.change}
          placeholder="Repo Title"
        />

        <input
          type="text"
          value={this.state.language}
          name="language"
          onChange={this.change}
          placeholder="Repo Language"
        />

        <select defaultValue={"DEFAULT"} name="status" onChange={this.change}>
          <option value="DEFAULT" disabled>
            Repo Status(Private/Public)
          </option>
          <option value="Private">Private</option>
          <option value="Public">Public</option>
        </select>

        <button onClick={this.moveItem}>New Repo</button>
      </div>
    );
  }
}
