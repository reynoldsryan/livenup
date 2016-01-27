import React, { Component } from 'react';
import { PageHeader, Input, ButtonInput } from 'react-bootstrap';

export default class Login extends Component {
  render() {
    return (
      <div>
        <PageHeader>Log In</PageHeader>
        <form>
          <Input label='Email Address' placeholder='Enter your email' />
          <Input label='Password' placeholder='Enter your password' />
          <ButtonInput type="submit" value="Submit" />
          </form>
      </div>
    );
  }
}
