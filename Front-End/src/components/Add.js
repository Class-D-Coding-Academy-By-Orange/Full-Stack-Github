import React, { Component } from 'react';

export default class Add extends Component {

  render() {
    return (
        <div>
          <form onSubmit={this.props.add} className="form-row">
          <div className="form-group col-md-3">
              <input type="text" className="form-control" id="repo-title" name='repo-title' placeholder="Repo Title" ref="repo-title"/>
            </div>
            <div className="form-group col-md-3">
              <input type="text" className="form-control" id="repo-language" name='repo-language' placeholder="Repo Language" ref="repo-language"/>
            </div>
            <div className="form-group col-md-4">
              <select className="form-control" id="repo-status" name="repo-status" ref="repo-status"> 
                <option>Repo Status (Private/Public)</option>
                <option>Private</option>
                <option>Public</option>
              </select>
            </div>
            <button type="submit" className="form-group col-md-2 btn btn-primary">Add Repo</button>
          </form>
        </div>
    );
  }
}
