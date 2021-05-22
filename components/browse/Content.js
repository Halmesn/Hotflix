import Billboard from './Billboard';
import Player from './Player';
import Details from './Details';
import Lolomo from './Lolomo';
import Loading from 'components/layout/background/Loading';

import { ProfileContext } from 'components/layout/Layout';

import useWindowDimensions from 'hooks/useWindowDimensions';

import { useState, useContext, createContext } from 'react';

export const NextflixContext = createContext();

// I started adding comments for browse related components because some of them are kinda messy and confusing

// this Component serves a purpose of managing cross component's states
export default function Content() {
  const { category, selectedProfile } = useContext(ProfileContext);
  const { avatar } = selectedProfile;
  const { width } = useWindowDimensions();

  // states for visual effects
  const [loading, setLoading] = useState(true);
  const [showTrailer, setShowTrailer] = useState(false);

  // handle situations when users click 'Play' or 'More info' buttons before video starts to play
  const [distracted, setDistracted] = useState(false);

  // states for both player and detail modals
  const [playerVideo, setPlayerVideo] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [donePlay, setDonePlay] = useState(false); // replay functionality

  // states for cross components usage
  const [mute, setMute] = useState(true);

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
    <NextflixContext.Provider value={providerValue}>
      <section>
        {loading ? <Loading src={avatar} /> : <Loading.Finished />}
        {playerVideo && (
          <Player playerVideo={playerVideo} setPlayerVideo={setPlayerVideo} />
        )}
        {selectedItem && (
          <Details
            width={width}
            mute={mute}
            category={category}
            setMute={setMute}
            selectedItem={selectedItem}
            setShowTrailer={setShowTrailer}
            setSelectedItem={setSelectedItem}
            setPlayerVideo={setPlayerVideo}
          />
        )}
        <Billboard
          avatar={avatar}
          width={width}
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
        <Lolomo category={category} loading={loading} />
      </section>
    </NextflixContext.Provider>
  );
}
