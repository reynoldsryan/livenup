import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import routeActions, { push } from 'react-router-redux';
import FlatButton from 'material-ui/lib/flat-button';
import LoginForm from '../containers/login';
import SignupForm from '../containers/signup';
import { logoutUser } from '../actions/auth_actions';


class LogInOut extends Component {
  render() {
    let element = <div></div>;
    if(this.props.token === null) {
      element =
        <div>
          <LoginForm />
          <SignupForm />
        </div>
    }

  if(this.props.token) {
    element =
      <div>
        <FlatButton
          onTouchTap = { () => this.props.push('/mygreenspace') }
          label = "My Greenspace"
          className = "nav-button"
        />
        <FlatButton
          onTouchTap = { ()=> this.props.logoutUser() }
          label = "Log Out"
          className = "nav-button"
        />
      </div>
    }
  return element;
  }
}

function mapStateToProps(state) {
  return {
    token: state.isAuthorized.token
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logoutUser, push }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInOut);
