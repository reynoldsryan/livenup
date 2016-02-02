import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUser } from '../actions/auth_actions';
import Divider from 'material-ui/lib/divider';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

//TODO make this and sign up Dialog or Popover

class LoginForm extends Component {
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
    console.log(event);
    event.preventDefault();
    this.props.loginUser(this.state.email, this.state.password);
    this.setState({ email: '', password: '' });
  }

  render() {

    return (
      <div>
        <h2>Log In</h2>
        <form onSubmit={this.onFormSubmit}>
          <TextField
            type='text'
            placeholder='Enter your email address'
            value={this.state.email}
            onChange={this.onEmailChange} /><br/>
          <br/>
          <TextField
            type='password'
            placeholder='Enter your password'
            value={this.state.password}
            onChange={this.onPasswordChange} />
          <br/>
          <RaisedButton primary={true} type='submit' label="Submit" />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loginUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginForm);
