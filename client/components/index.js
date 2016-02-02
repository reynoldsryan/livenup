import React, { Component } from 'react';
import VideoJumbotron from './jumbotron';
import SpaceList from '../containers/spaceList';

export default class Index extends Component {
  render() {
    return (
      <div>
        <VideoJumbotron />
        <SpaceList />
      </div>
    );
  }
}
