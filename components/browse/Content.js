import Billboard from './Billboard';
import Player from './Player';
import Details from './Details';
import Loading from 'components/layout/background/Loading';

import { ProfileContext } from 'components/layout/Layout';

import { useState, useContext } from 'react';

// this Component serves a purpose of managing cross component's states
export default function Content() {
  const { selectedProfile } = useContext(ProfileContext);
  const { avatar } = selectedProfile;

  // states for visual effects
  const [loading, setLoading] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const [distracted, setDistracted] = useState(false);

  // states for player and detail modals
  const [playerVideo, setPlayerVideo] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  // states for cross components uses
  const [mute, setMute] = useState(true);

  return (
    <section>
      {loading ? <Loading src={avatar} /> : <Loading.Finished />}
      {playerVideo && (
        <Player playerVideo={playerVideo} setPlayerVideo={setPlayerVideo} />
      )}
      {selectedItem && (
        <Details
          selectedItem={selectedItem}
          mute={mute}
          setMute={setMute}
          setShowTrailer={setShowTrailer}
          setSelectedItem={setSelectedItem}
          setPlayerVideo={setPlayerVideo}
        />
      )}
      <Billboard
        setPlayerVideo={setPlayerVideo}
        setSelectedItem={setSelectedItem}
        mute={mute}
        setMute={setMute}
        showTrailer={showTrailer}
        setShowTrailer={setShowTrailer}
        distracted={distracted}
        setDistracted={setDistracted}
        setLoading={setLoading}
      />
    </section>
  );
}
