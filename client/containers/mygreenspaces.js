import React , { Component } from 'react';
import {  bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Paper from 'material-ui/lib/paper';
import Space from './space';

import { fetchUserSpaces } from '../actions/spaces_actions';


class MyGreenSpaces extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.fetchUserSpaces();
  }

  render() {
    let counter = 0;
    return (
      <Paper>

        {this.props.user_spaces.map((userspace, i) => {
          console.log(`Userspace: `,userspace,` at ${i}`);
          return <Space key={counter++} fetchedSpace={userspace}/>
        })}
      </Paper>
    );
  }
}


function mapStateToProps(state) {
  console.log('state being mapped in mygreenspace', state);
  return {
    user_spaces: state.userSpaces
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUserSpaces }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyGreenSpaces);
