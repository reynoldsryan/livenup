import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}
