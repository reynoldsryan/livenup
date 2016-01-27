import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { routeActions } from 'react-router-redux';
import { connect } from 'react-redux';

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
          <LinkContainer to={{ pathname: '/myplants' }}>
            <NavItem eventKey={1}>My Plants</NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: '/profile' }}>
            <NavItem eventKey={2}>Profile</NavItem>
          </LinkContainer>
        </Nav>
        <Nav pullRight>
          <NavDropdown eventKey={3} title='Log In' id='basic-nav-dropdown'>
            <MenuItem eventKey={3.1}>Log In with Facebook</MenuItem>
            <MenuItem eventKey={3.2}>Log In with Google</MenuItem>
            <MenuItem divider />
            <LinkContainer to={{ pathname: '/login' }}>
              <MenuItem eventKey={3.3}>Log In</MenuItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/signup' }}>
              <MenuItem eventKey={3.4}>Sign Up</MenuItem>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default connect(null, routeActions)(NavBar);
