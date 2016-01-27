import React, { Component } from 'react';
import { PageHeader, Input, ButtonInput } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signupUser } from '../actions/auth_actions';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {username: '', email: '', password: ''};

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  onFormSubmit(event) {
    console.log(event);
    event.preventDefault();
    this.props.signupUser(this.state.username, this.state.email, this.state.password);
    this.setState({ username: '', email: '', password: '' });

  render() {

    return (
      <div>
        <PageHeader>Sign Up</PageHeader>
        <form onSubmit={this.onFormSubmit}>
          <Input
            type='text'
            label='Username'
            placeholder='Enter your username'
            value={this.state.username}
            onChange={this.onUsernameChange} />
          <Input
            type='email'
            label='Email Address'
            placeholder='Enter your email address'
            value={this.state.email}
            onChange={this.onEmailChange} />
          <Input
            type='password'
            label='Password'
            placeholder='Enter your password'
            value={this.state.password}
            onChange={this.onPasswordChange} />
          <ButtonInput type='submit' bsStyle='primary' value="Submit" />
        </form>
      </div>
    );
  }
}

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ signupUser }, dispatch);
  }

  export default connect(null, mapDispatchToProps)(SignupForm);
