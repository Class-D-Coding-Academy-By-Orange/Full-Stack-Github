import React, { Component } from "react";
import Table from "./components/Table";
import Add from "./components/Add";
import axios from "axios";

export default class App extends Component {
  state = {
    repos: [
      // {
      //   id: 1,
      //   title: "Array",
      //   status: "Private",
      //   language: "HTML"
      // },
      // {
      //   id: 2,
      //   title: "Object",
      //   status: "Public",
      //   language: "JavaScript"
      // }
    ]
  };

  componentDidMount() {
    this.showData();
  }

  showData = () => {
    // const axios = require("axios");

    // Make a request for a user with a given ID
    axios
      .get("http://localhost:9000/data")
      .then(({ data }) => {
        // handle success
        // console.log(data);
        this.setState({
          repos: data
        });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  };

  delItem = ID => {
    // let newobj = this.state.repos.filter((elem, i) => {
    //   return ID !== elem.id;
    // });
    // this.setState({
    //   repos: newobj
    // });
    // const axios = require("axios");
    axios
      .delete(`http://localhost:9000/delete/${ID}`)
      .then(({ data }) => {
        // handle success
        // console.log(data);
        this.setState({
          repos: data
        });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  };

  // addItem = obj => {
  addItem = state => {
    // obj.id = this.state.repos.length + 1;
    // let newItems = this.state.repos;
    // newItems.push(state);
    // const axios = require("axios");
    axios
      .post("http://localhost:9000/addrepo", state)
      .then(({ data }) => {
        // console.log(data);
        this.setState({
          repos: data
        });
      })
      .catch(error => {
        console.log(error);
      });
    // this.setState({
    //   repos: newItems
    // });
  };

  // check = ID => {
  //   // console.log(ID);
  //   const newststus = this.state.repos;
  //   newststus.map((elem, i) => {
  //     if (elem.id === ID) {
  //       if (elem.status === "Private") {
  //         elem.status = "Public";
  //       } else {
  //         elem.status = "Private";
  //       }
  //     }
  //     return elem;
  //   });
  //   this.setState({
  //     repos: newststus
  //   });
  // };

  check = ID => {
    // console.log(ID);
    // const axios = require("axios");
    axios
      .put(`http://localhost:9000/check/${ID}`)
      .then(({ data }) => {
        // console.log(data);

        this.setState({
          repos: data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    // console.log(this.state.repos[0].id)
    const { state, delItem, addItem, check } = this;
    const { repos } = state;
    return (
      <div style={{ border: "black 1px solid" }}>
        {/* <button onClick={showData}>getData</button> */}
        <h6>App</h6>
        <Add addItem={addItem} />
        <br />
        <Table repos={repos} del={delItem} check={check} />
      </div>
    );
  }
}
