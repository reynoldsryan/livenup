import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { routeActions } from 'react-router-redux';
import { connect } from 'react-redux';
import LogInOut from './logInOut';

class NavBar extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <LinkContainer to={{ pathname: '/' }}>
            <Navbar.Brand>LivenUp</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={{ pathname: '/myspaces' }}>
              <NavItem eventKey={1}>My Plants</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/profile' }}>
              <NavItem eventKey={2}>Profile</NavItem>
            </LinkContainer>
          </Nav>
          <LogInOut />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default connect(null, routeActions)(NavBar);
