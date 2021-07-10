import * as styled from './styles';

export default function Loading({ src, ...restProps }) {
  return (
    <styled.Spinner {...restProps}>
      <styled.Loading />
      <styled.Avatar src={src} alt="your avatar" />
    </styled.Spinner>
  );
}

Loading.Finished = () => {
  return <styled.Finished />;
};
