import * as styled from './playerStyles';
import ReactPlayer from 'react-player/youtube';

export default function Player({ playerVideo, setPlayerVideo }) {
  return (
    <styled.Player>
      <styled.Wrapper>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${playerVideo}`}
          width="100%"
          height="100%"
          playing
        />
      </styled.Wrapper>
      <styled.BackButton onClick={() => setPlayerVideo(null)}>
        <styled.BackIcon />
      </styled.BackButton>
      <styled.FullScreen />
    </styled.Player>
  );
}
