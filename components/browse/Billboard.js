import { NextflixContext } from 'pages/browse';

import { useContext } from 'react';

export default function Billboard() {
  const { TVBanner, TVTrailer, movieBanner, movieTrailer } =
    useContext(NextflixContext);

  return <></>;
}
