import * as styled from './styles';

export default function Loading({ src, ...restProps }) {
  return (
    <styled.FullScreenWrapper>
      <styled.Spinner {...restProps}>
        <styled.Loading />
        <styled.Avatar src={src} alt="your avatar" />
      </styled.Spinner>
    </styled.FullScreenWrapper>
  );
}

Loading.Finished = () => <styled.Finished />;
