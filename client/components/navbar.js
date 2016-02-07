import React, { Component } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import routeActions, { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LogInOut from './logInOut';
import injectTapEventPlugin from 'react-tap-event-plugin';

class NavBar extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <AppBar
        className = 'nav-bar'
        showMenuIconButton = { false }
        title ={<span style={{cursor: 'pointer'}}>LivenUp</span>}
        onTitleTouchTap = { () => this.props.push('/') }
        iconElementRight = { <LogInOut /> }
      />
  );
  }
}

injectTapEventPlugin();

function mapDispatchToProps(dispatch){
  return bindActionCreators({ push }, dispatch);
}

export default connect(null, mapDispatchToProps)(NavBar);
