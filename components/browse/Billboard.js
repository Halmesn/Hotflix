import * as styled from './contentStyles';

import { NextflixContext } from 'pages/browse';

import { useState, useContext, useRef } from 'react';
import ReactPlayer from 'react-player';

export default function Billboard() {
  const { TVBanner, TVTrailer, movieBanner, movieTrailer } =
    useContext(NextflixContext);
  const [trailer, setTrailer] = useState(TVTrailer);
  const [mute, setMute] = useState(true);
  const playerRef = useRef(null);

  const playerConfig = {
    youtube: {
      playerVars: {
        // player not respond to keyboard controls
        disablekb: 1,
        // video annotations not be shown
        iv_load_policy: 3,
      },
    },
  };

  return (
    <styled.Billboard>
      {trailer && (
        <styled.Video>
          <ReactPlayer
            ref={playerRef}
            url={`https://www.youtube.com/watch?v=${trailer}`}
            className="trailer"
            width="100%"
            height="100%"
            playing
            muted={mute}
            onEnded={() => setTrailer()}
            config={playerConfig}
          />
          <styled.Mute onClick={() => setMute(!mute)}>
            {mute ? <styled.MuteIcon /> : <styled.NotMuteIcon />}
          </styled.Mute>
        </styled.Video>
      )}
    </styled.Billboard>
  );
}
