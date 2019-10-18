import React, { Component } from "react";
import Add from "./components/Add.component";
import Table from "./components/Table.component";
import axios from "axios";
import './App.css';
// =========================================Imports===================================================//
export default class App extends Component {
  state = {
    repos: []
  };
  //========================================Mounting================================================//
  componentDidMount() {
    axios
      .get("http://localhost:9000/data")
      .then(({ data }) => {
        console.log(data);
        this.setState({
          repos: data
        });
      })
      .catch(function({message}) {
        console.log(message);
      });
  }
  //=======================================Add function=================================================//
  add = (title, language, status) => {
    axios
      .post("http://localhost:9000/add", {
        title,
        language,
        status
      })
      .then(({data}) => {
        this.setState({
          repos: data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  //=======================================Del function==================================================//
  del = ID => {
    axios.delete(`http://localhost:9000/delete/${ID}`).then(({ data }) => {
      this.setState({
        repos: data
      });
    });
  };
  //======================================Toggle Function================================================//
  handleToggle = ID => {
    axios.get(`http://localhost:9000/edit/${ID}`).then(({data}) => {
      this.setState({ repos: data });
    });
  };
  //=====================================================================================================//
  render() {
    return (
      <div className="fontie">
        <h1 style={{ textAlign: "center", marginTop : '20px' }}> MERN stack Github List 🖥️🖱️ </h1>
        <Add add={this.add} />
        <br/>
        <Table
          toggle={this.handleToggle}
          del={this.del}
          repos={this.state.repos}
        />
      </div>
    );
  }
}
