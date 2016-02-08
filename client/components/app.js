import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import SpaceCreator  from "../containers/spaceCreator";
import Footer from './footer';

export default class App extends Component {

  render() {
    console.log('this.props.location.pathname in App is ', this.props.location.pathname);
    return (
      <div>
        <NavBar atHome={this.props.location.pathname === '/'} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
