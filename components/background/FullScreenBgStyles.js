import styled from 'styled-components';
import * as mixins from 'components/home/hero/HeroStyles';

export const Container = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  /* display: grid;
  place-items: center; */
  color: #fff;
  user-select: none;
`;

export const Background = styled(mixins.Background)``;

export const ImageContainer = styled(mixins.ImageContainer)``;

export const Gradient = styled(mixins.Gradient)``;
