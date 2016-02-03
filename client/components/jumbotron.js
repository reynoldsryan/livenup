import React, { Component } from 'react';

export default class VideoJumbotron extends Component {
  render() {
    return(
        <div className='video-container'>
          <video autoPlay loop volume='0' poster=''>
            <source src='../../assets/Greenhouse.mp4' type='video/mp4' />
          </video>
        </div>
    );
  }
}
