import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signupUser } from '../actions/auth_actions';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {name: '', email: '', password: ''};

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
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
    this.props.signupUser(this.state.name, this.state.email, this.state.password);
    this.setState({ name: '', email: '', password: '' });
  }

  render() {

    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={this.onFormSubmit}>
          <TextField
            type='email'
            hintText='Enter your email address'
            floatingLabelText='Email Address'
            value={this.state.email}
            onChange={this.onEmailChange} />
            <br/>
            <br/>
          <TextField
            type='password'
            floatingLabelText='Password'
            hintText='Enter your password'
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
    return bindActionCreators({ signupUser }, dispatch);
  }

  export default connect(null, mapDispatchToProps)(SignupForm);
