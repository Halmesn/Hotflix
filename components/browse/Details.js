import * as styled from './detailsStyles';

import { ProfileContext } from 'components/layout/Layout';

import { getDetails as fetchDetails } from 'helpers/browseHelpers';

import { useState, useEffect, useRef, useContext } from 'react';
import ReactPlayer from 'react-player/youtube';
import Image from 'next/image';

export default function Details({
  selectedItem,
  mute,
  setMute,
  setShowTrailer,
  setSelectedItem,
}) {
  const { category } = useContext(ProfileContext);
  const { id, key, start } = selectedItem;

  const [details, setDetails] = useState(null);
  const [cast, setCast] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  const modalRef = useRef();
  const playerRef = useRef(null);

  useEffect(() => setShowTrailer(false), []);

  useEffect(() => {
    const onOutsideClick = (e) =>
      (modalRef.current && modalRef.current.contains(e.target)) ||
      setSelectedItem(null);

    document.addEventListener('click', onOutsideClick);
    return () => document.removeEventListener('click', onOutsideClick);
  }, []);

  useEffect(() => {
    const getDetails = async () => {
      const { details, cast, trailer } = await fetchDetails(category, id);
      setDetails(details);
      setCast(cast);
      if (trailer) setTrailer(trailer);
    };
    getDetails();
  }, [selectedItem]);

  return (
    details &&
    cast &&
    trailer && (
      <styled.Details>
        <styled.FullScreen />
        <styled.Wrapper ref={modalRef}>
          {!showBanner && (
            <styled.Video>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${key}`}
                className="details"
                width="100%"
                height="100%"
                playing
                muted={mute}
                onEnded={() => setShowBanner(true)}
                config={{ playerVars: { start: Math.floor(start) } }}
              />
            </styled.Video>
          )}
          {details.backdrop_path && (showBanner || !key) && (
            <styled.Banner>
              <Image
                src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
                alt={details.title}
                layout="fill"
                objectFit="cover"
              />
            </styled.Banner>
          )}
          <styled.Close onClick={() => setSelectedItem(null)}>
            <styled.CloseIcon />
          </styled.Close>
          <styled.Overlay />
          <styled.Summary>
            <styled.Panel className="major-details">
              <styled.Title>
                {details.name || details.title || details.original_name}
              </styled.Title>
              <p className="air-date">
                <span>
                  {new Date(
                    details.first_air_date || details.release_date
                  ).getFullYear()}
                </span>
                {category === 'TVShows' && (
                  <span>{`${details.number_of_seasons} ${
                    details.number_of_seasons > 1 ? 'Seasons' : 'Season'
                  }`}</span>
                )}
              </p>
              <p className="overview">{details.overview}</p>
            </styled.Panel>
            <styled.Panel className="minor-details">
              {cast && (
                <styled.MinorDetails>
                  <span>Cast:</span>{' '}
                  {cast.map(({ name }, i) => {
                    if (i > 5) return null;
                    return i === cast.length - 1 ? name : name + ', ';
                  })}
                  {cast.length > 6 && <i>more</i>}
                </styled.MinorDetails>
              )}
              <styled.MinorDetails>
                <span>Genres:</span>{' '}
                {details.genres.map(({ name }, i) =>
                  i === details.genres.length - 1 ? name : name + ', '
                )}
              </styled.MinorDetails>
            </styled.Panel>
          </styled.Summary>
        </styled.Wrapper>
      </styled.Details>
    )
  );
}
