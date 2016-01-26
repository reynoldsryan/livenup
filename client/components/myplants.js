import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    return (
      <div>These are my plants.
      {this.props.children}</div>
    );
  }
}
