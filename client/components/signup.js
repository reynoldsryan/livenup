import React, { Component } from 'react';
import { PageHeader, Input, ButtonInput } from 'react-bootstrap';
<<<<<<< HEAD
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signupUser } from '../actions/auth_actions';

export default class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {email: '', password: ''};

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.signupUser(this.state.email, this.state.password);
    this.setState({ email: '', password: '' });
  }

  render() {
    const { errorMessage } = this.props;

    return (
      <div>
        <PageHeader>Sign Up</PageHeader>
        <form onSubmit={this.onFormSubmit}>
          <Input
            type='email'
            label='Email Address'
            placeholder='Enter your email'
            value={this.state.email}
            onChange={this.onEmailChange} />
          <Input
            type='password'
            label='Password'
            placeholder='Enter your password'
            value={this.state.password}
            onChange={this.onPasswordChange} />
          <ButtonInput bsStyle='primary' value="Submit" />
        </form>
=======

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
>>>>>>> 1458068702285c99997a2752d627d326e712f3a7
      </div>
    );
  }
}
<<<<<<< HEAD

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ signupUser }, dispatch);
  }

  export default connect(null, mapDispatchToProps)(SignupForm);
=======
>>>>>>> 1458068702285c99997a2752d627d326e712f3a7
