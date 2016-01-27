import React, { Component, PropTypes } from 'react';
import { PageHeader, Input, ButtonInput } from 'react-bootstrap';

export default class Login extends Component {
  render() {
    const { errorMessage } = this.props;

    return (
      <div>
        <PageHeader>Log In</PageHeader>
        <form>
          <Input label='Email Address' ref='email' placeholder='Enter your email' />
          <Input label='Password' ref='password' placeholder='Enter your password' />
          <ButtonInput onClick={event => this.handleSubmit(event)} bsStyle='primary' value="Submit" />
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    const username = this.refs.email;
    const password = this.refs.password;
    const userInfo = { username: username.value.trim(), password: password.value.trim() };
    this.props.onLoginSubmit(userInfo);
  }
}

Login.PropTypes = {
  onLoginSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};
