import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class App extends Component {
  render() {
    return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='#'>LivenUp</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1}>My Plants</NavItem>
          <NavItem eventKey={2}>Profile</NavItem>
        </Nav>
        <Nav pullRight>
          <NavDropdown eventKey={3} title='SignIn' id='basic-nav-dropdown'>
            <MenuItem eventKey={3.1}>Sign In with Facebook</MenuItem>
            <MenuItem eventKey={3.2}>Sign In with Google</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Sign In</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}
