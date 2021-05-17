import * as styled from './playerStyles';
import ReactPlayer from 'react-player/youtube';

import { useRef } from 'react';

export default function Player({ playerVideo, setPlayerVideo }) {
  const { trailer, start } = playerVideo;
  const playerRef = useRef(null);

  return (
    <styled.Player>
      <styled.Wrapper>
        <ReactPlayer
          ref={playerRef}
          url={`https://www.youtube.com/watch?v=${trailer}`}
          width="100%"
          height="100%"
          playing
          controls
          config={{ playerVars: { start: Math.floor(start) } }}
        />
      </styled.Wrapper>
      <styled.BackButton onClick={() => setPlayerVideo(null)}>
        <styled.BackIcon />
      </styled.BackButton>
      <styled.FullScreen />
    </styled.Player>
  );
}
