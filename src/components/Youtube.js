import React from 'react';
import YouTube, { YouTubeProps } from "react-youtube";


function Youtube(props) {
  const onPlayerReady: YouTubeProps['onReady'] = (e) => {
    e.target.playVideo();
  }

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      loop: 1,
    },
  };

  return <YouTube videoId='1fRZUdtpOTnVk23B' opts={opts} onReady={onPlayerReady} />;
}

export default Youtube;