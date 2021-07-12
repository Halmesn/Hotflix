import * as styled from './playerStyles';
import ReactPlayer from 'react-player/youtube';

export default function Player({ playerVideo, setPlayerVideo }) {
  const { trailer, start } = playerVideo;

  return (
    <styled.Player>
      <styled.Wrapper>
        <ReactPlayer
          url={`https://www.youtube-nocookie.com/embed/${trailer}`}
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
