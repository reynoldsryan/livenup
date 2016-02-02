import React, { Component } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import FlatButton from 'material-ui/lib/flat-button';
import { routeActions } from 'react-router-redux';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth_actions';
import injectTapEventPlugin from 'react-tap-event-plugin';



class NavBar extends Component {
  // styles: {
  //   title: {
  //     cursor: 'pointer'
  //   }
  // }

  route (path) {
    this.props.push(path)
  }

  logIn () {
    if(this.props.token === null){
      return(
        <FlatButton
          onTouchTap = { ()=>{this.route('/login')} }
          label = "Log In"
        />
      )
    }
    else {
      return (false)
    }
  }

  logOut () {
    if(this.props.toke === null ){
      <FlatButton
        onTouchTap = { ()=>{this.route('/signup')} }
        label = "Sign Up"
      />
    }
    else {
      return(
        <FlatButton
          onTouchTap = { () => {this.props.logoutUser()} }
          label="Log Out" />
      )
    }
  }
  constructor (props) {
    super(props);
    console.log('props in NavBar: ', props);
  }
  render() {
    return (
      <AppBar
        showMenuIconButton = { false }
        title = {
            <span> LivenUp </span>
          }
        onTitleTouchTap = {() => {this.route('/')}}
        iconElementRight = {
          <FlatButton
            onTouchTap = {() => {this.route('/myspaces')}}
            label="My Spaces" />
          }
      />
    );
  }
}

injectTapEventPlugin();

//bind and map everything

export default connect(null, routeActions)(NavBar);



// iconElementRight = { ()=> {this.logIn()} }
// iconElementRight = { () => {this.logOut()} }
