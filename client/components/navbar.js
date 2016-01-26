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
          <NavDropdown eventKey={3} title='SignIn' id='basic-nav-dropdown'>
            <MenuItem eventKey={3.1}>Sign In with Facebook</MenuItem>
            <MenuItem eventKey={3.2}>Sign In with Google</MenuItem>
            <MenuItem divider />
            <LinkContainer to={{ pathname: '/signin' }}>
              <MenuItem eventKey={3.3}>Sign In</MenuItem>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default connect(null, routeActions)(NavBar);
