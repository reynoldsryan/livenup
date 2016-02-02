import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import Inspirations from '../containers/inspirations'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Inspirations />
        {this.props.children}
      </div>
    );
  }
}
