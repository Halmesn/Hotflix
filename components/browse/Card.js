import * as styled from './cardStyles';

export default function Card() {
  return (
    <styled.CardContainer key={item.id} dragging={dragging} isMobile={isMobile}>
      <styled.Card
        onMouseEnter={() => onPosterHover(item.id)}
        onMouseLeave={() => {
          clearTimeout(timer);
          setSliderTrailer(null);
        }}
        // separate click from drag
        // credit:https://github.com/akiran/react-slick/issues/848#issuecomment-438903613
        onMouseDown={(e) => setClientXonMouseDown(e.clientX)}
        onClick={(e) => onPosterClick(e, item)}
      >
        {!showPoster(item) && sliderTrailer && (
          <styled.Video className={sliderTrailer.isLoaded ? 'visible' : ''}>
            <ReactPlayer
              ref={playerRef}
              url={`https://www.youtube.com/watch?v=${sliderTrailer.url}`}
              width="100%"
              height="100%"
              playing
              muted={mute}
              onReady={onTrailerReady}
              onEnded={() => setSliderTrailer(null)}
              config={playerConfig}
              className="slider-trailer"
            />
            <styled.Mute
              onMouseDown={(e) => {
                e.stopPropagation();
                setMute(!mute);
              }}
            >
              {mute ? <MuteIcon /> : <NotMuteIcon />}
            </styled.Mute>
          </styled.Video>
        )}
        {(showPoster(item) || !sliderTrailer?.isLoaded) && (
          <styled.Poster>
            <Image
              src={`${
                section.size === 'large'
                  ? `https://image.tmdb.org/t/p/w342/${item.poster_path}`
                  : `https://image.tmdb.org/t/p/w300/${item.backdrop_path}`
              }`}
              alt={item.name || item.title}
              width={300}
              height={section.size === 'large' ? 448 : 165}
            />
          </styled.Poster>
        )}
        <styled.Details onMouseDown={(e) => e.stopPropagation()}>
          <styled.MiniTitle>{item.name || item.title}</styled.MiniTitle>
          <br />
          <styled.Rating>
            {isNewRelease(item.release_date || item.first_air_date) && (
              <span className="new-badge">New</span>
            )}
            <span className="popularity">
              {Math.round(item.popularity) / 10}% Popularity
            </span>
            <span className="rating">{item.vote_average}/10 Rated</span>
          </styled.Rating>
          <br />
          <styled.Genre>
            {genres &&
              genres.length > 0 &&
              item.genre_ids.map((genreId, i) => {
                if (i > 2) return null;
                const genreDetails = genres.find(({ id }) => id === genreId);
                return (
                  <React.Fragment key={genreId}>
                    {i !== 0 && <span className="genre-dot">&bull;</span>}
                    <span>{`${genreDetails && genreDetails.name}`}</span>
                  </React.Fragment>
                );
              })}
          </styled.Genre>
        </styled.Details>
      </styled.Card>
    </styled.CardContainer>
  );
}
