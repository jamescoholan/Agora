import React from "react"
import ReactPlayer from 'react-player'
import "./responsive-player.css"


const ResponsivePlayer = ({ onProgress }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="https://agoravideos.s3-us-west-1.amazonaws.com/Show.mp4"
        width="100%"
        height="100%"
        controls={true}
        onProgress={onProgress}
        playIcon
      />
    </div>
  );
};

export default ResponsivePlayer;
