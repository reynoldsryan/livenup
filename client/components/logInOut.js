import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logoutUser } from '../actions/auth_actions';

class LogInOut extends Component {
render() {
  let element = null;
  if(this.props.token === null) {
    element =
    <Nav pullRight>
      <LinkContainer to={{ pathname: '/login' }}>
        <NavItem eventKey={3}>Log In</NavItem>
      </LinkContainer>
      <LinkContainer to={{ pathname: '/signup' }}>
        <NavItem eventKey={4}>Sign Up</NavItem>
      </LinkContainer>
    </Nav>;
    }
  if(this.props.token) {
    element =
    <Nav pullRight>
      <NavItem onClick={this.props.logoutUser} eventKey={3}>Log Out</NavItem>
    </Nav>;
    }
  return element;
  }
}

function mapStateToProps(state) {
  return {
    token: state.isAuthorized.token
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logoutUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInOut);
