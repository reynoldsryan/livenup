import React, { Component } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import routeActions, { Link } from 'react-router-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LogInOut from './logInOut';
import injectTapEventPlugin from 'react-tap-event-plugin';


class NavBar extends Component {
  constructor (props) {
    super(props);
    console.log('+++| 89 | props in NavBar: ', props);
  }

  render() {
    return (
      <AppBar
        className = 'nav-bar'
        showMenuIconButton = { false }
        title = 'LivenUp'
        containerElement = { <Link to= "/" /> }
        iconElementRight = { <LogInOut /> }
      />
    )
  }
}

injectTapEventPlugin();

function mapDispatchToProps(dispatch){
  return bindActionCreators({ Link }, dispatch)
}

export default connect(null, mapDispatchToProps)(NavBar);
