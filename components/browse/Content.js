import Billboard from './Billboard';
import Player from './Player';
import Details from './Details';
import Lolomo from './Lolomo';
import SearchResults from './SearchResults';
import Loading from 'components/layout/background/Loading';

import { ProfileContext } from 'components/layout/Layout';
import { TMDB } from 'data/dynamic/tmdbEndpoints';

import { useState, useContext, createContext, useEffect } from 'react';

export const SliderContext = createContext();

// I started adding comments for browse related components because some of them are kinda messy and confusing

// this Component serves a purpose of managing cross component's states
export default function Content() {
  const { category, selectedProfile, searchResults, windowWidth } =
    useContext(ProfileContext);
  const { avatar } = selectedProfile;

  // states for visual effects
  const [loading, setLoading] = useState(true);
  const [showTrailer, setShowTrailer] = useState(false);
  const [rowsShown, setRowsShown] = useState(5);

  // handle situations when users click 'Play' or 'More info' buttons before video starts to play
  const [distracted, setDistracted] = useState(false);

  // states for both player and detail modals
  const [playerVideo, setPlayerVideo] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [donePlay, setDonePlay] = useState(false); // replay functionality

  // states for cross components usage
  const [mute, setMute] = useState(true);

  // scroll reveal content
  useEffect(() => {
    const onWindowScroll = () =>
      window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 600 &&
      setRowsShown((rowsShown) => {
        const newRowsShown = rowsShown + 2;
        return newRowsShown <= TMDB[category].sections.length
          ? newRowsShown
          : rowsShown;
      });

    window.addEventListener('scroll', onWindowScroll);

    return () => window.removeEventListener('scroll', onWindowScroll);
  }, []);

  useEffect(() => setRowsShown(5), [category]);

  const providerValue = {
    mute,
    setMute,
    setDonePlay,
    setDistracted,
    setPlayerVideo,
    setShowTrailer,
    setSelectedItem,
  };

  return (
    <section>
      {loading ? <Loading src={avatar} /> : <Loading.Finished />}
      {playerVideo && (
        <Player playerVideo={playerVideo} setPlayerVideo={setPlayerVideo} />
      )}
      {selectedItem && (
        <Details
          windowWidth={windowWidth}
          mute={mute}
          category={category}
          setMute={setMute}
          selectedItem={selectedItem}
          setShowTrailer={setShowTrailer}
          setSelectedItem={setSelectedItem}
          setPlayerVideo={setPlayerVideo}
        />
      )}
      {searchResults ? (
        <SliderContext.Provider value={providerValue}>
          <SearchResults />
        </SliderContext.Provider>
      ) : (
        <>
          <Billboard
            avatar={avatar}
            windowWidth={windowWidth}
            category={category}
            mute={mute}
            setMute={setMute}
            donePlay={donePlay}
            setDonePlay={setDonePlay}
            showTrailer={showTrailer}
            setShowTrailer={setShowTrailer}
            distracted={distracted}
            setDistracted={setDistracted}
            setLoading={setLoading}
            setPlayerVideo={setPlayerVideo}
            setSelectedItem={setSelectedItem}
          />
          <SliderContext.Provider value={providerValue}>
            <Lolomo
              category={category}
              loading={loading}
              rowsShown={rowsShown}
            />
          </SliderContext.Provider>
        </>
      )}
    </section>
  );
}
