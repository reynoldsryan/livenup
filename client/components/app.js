import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import SpaceCreator  from "../containers/spaceCreator";

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
