import React from 'react';

export default class VideoStreaming extends React.Component {
  render () {
    return (
      <div>
        <video style={{display:"none"}} autoPlay controls></video>
        <canvas id="miCanvas" width="800" height="600"></canvas>
      </div>
    );
  }
}
