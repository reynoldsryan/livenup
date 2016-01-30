import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    return (
      <div>
        <div>Name: {this.props.name}</div>
        <div>Email: {this.props.email}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.isAuthorized.name,
    email: state.isAuthorized.email
  };
}

export default connect(mapStateToProps, null)(Profile);
