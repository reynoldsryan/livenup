import React, { Component } from 'react';
import Paper from 'material-ui/lib/paper';

export default class HowToSteps extends Component {
  render() {
    const style = {
      height: 150,
      width: 150,
      margin: 100,
      textAlign: 'center',
      color: 'purple',
      fontSize: '800%',
      display: 'inline-block'
    };
    const textStyle = {
      height: 100,
      width: 100,
      margin: 20,
      textAlign: 'center',
      fontSize: '100%',
      display: 'inline-block',
    };
    return(
      <div>
        <Paper style={style} zDepth={1} circle={true}>1</Paper>
        <Paper style={style} zDepth={1} circle={true}>2</Paper>
        <Paper style={style} zDepth={1} circle={true}>3</Paper>
      </div>
    );
  }
}
