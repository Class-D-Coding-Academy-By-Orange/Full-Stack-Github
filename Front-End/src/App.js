import React, { Component } from 'react';
import Add from './components/Add';
import Table from './components/Table';
import axios from 'axios'

export default class App extends Component {

  state = {
    repos: []
  };

  componentDidMount() {
    this.getData()
    console.log('Done By\nAhmad Al-Ghzawi')
  }

  getData() {
    axios.get(`http://localhost:9500/get_data`)
      .then(response => this.setState({repos: response.data}))
      .catch (error => console.log(error))
  }

  toggleStatus = id => {
    axios.put(`http://localhost:9500/toggle/${id}`)
      .then(response => this.setState({repos: response.data}))
      .catch(error => console.log(error))
  }

  add = event => {
    event.preventDefault()
    let title = event.target['repo-title'].value
    let status = event.target['repo-status'].value
    let language = event.target['repo-language'].value

    if (!(title === '' || language === '' || status === 'Repo Status (Private/Public)')) {
      event.target['repo-title'].value = ''
      event.target['repo-status'].value = 'Repo Status (Private/Public)'
      event.target['repo-language'].value = ''
      
      axios.post('http://localhost:9500/add',{title, status, language})
        .then(response => this.setState({repos: response.data}))
        .catch(error => console.log(error))
    }
  }

  remove = id => {
    axios.delete(`http://localhost:9500/delete/${id}`)
      .then(response => this.setState({repos: response.data}))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="container-fluid">
        <h6 className="mt-5 ml-5">github App</h6>
        <div className="container mt-5">
          <Add add={this.add} />
          <Table repos={this.state.repos} toggleStatus={this.toggleStatus} remove={this.remove} />
        </div>
      </div>
    );
  }
}
