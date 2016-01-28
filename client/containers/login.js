import React, { Component } from 'react';
import { PageHeader, Input, ButtonInput } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUser } from '../actions/auth_actions';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {username: '', password: ''};

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  onFormSubmit(event) {
    console.log(event);
    event.preventDefault();
    this.props.loginUser(this.state.username, this.state.password);
    this.setState({ username: '', password: '' });
  }

  render() {

    return (
      <div>
        <PageHeader>Log In</PageHeader>
        <form onSubmit={this.onFormSubmit}>
          <Input
            type='text'
            label='Username'
            placeholder='Enter your username'
            value={this.state.username}
            onChange={this.onUsernameChange} />
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
  return bindActionCreators({ loginUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginForm);
