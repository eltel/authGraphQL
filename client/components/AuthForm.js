import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {Router, hashHistory, Route, IndexRoute } from 'react-router';

import query from '../queries/CurrentUser';
import mutation from '../mutations/Logout';

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.onSubmit.bind(this)} className="col s6">
          <div className="input-field">
            <input
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
               />
          </div>
          <div className="input-field">
            <input
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
               />
          </div>
          <div className="errors">
            {this.props.errors.map(error => <div key={error}>{error}
          </div>)}
          </div>

          <button className="btn">Submit</button>
        </form>
      </div>
    )

  };
}

export default AuthForm;
