import * as styled from './styles';

export default function FalseLoading({ src, ...restProps }) {
  return (
    <styled.Spinner {...restProps}>
      <styled.Loading />
      <styled.Avatar src={src} alt="your avatar" />
    </styled.Spinner>
  );
}

FalseLoading.Finished = () => {
  return <styled.Finished />;
};
