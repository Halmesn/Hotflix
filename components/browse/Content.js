import Billboard from './Billboard';
import Player from './Player';
import Details from './Details';
import FalseLoading from 'components/layout/background/FalseLoading';

import { ProfileContext } from 'components/layout/Layout';

import { useState, useEffect, useContext } from 'react';

export default function Content() {
  const { selectedProfile, category } = useContext(ProfileContext);
  const [falseLoading, setFalseLoading] = useState(true);
  const [playerVideo, setPlayerVideo] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const [mute, setMute] = useState(true);
  const { avatar } = selectedProfile;

  useEffect(() => {
    setFalseLoading(true);
    const falseLoading = () => setFalseLoading(false);
    setTimeout(falseLoading, 1000);
    return () => clearTimeout(falseLoading);
  }, [avatar]);

  return (
    <section>
      {falseLoading ? <FalseLoading src={avatar} /> : <FalseLoading.Finished />}
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
        />
      )}
      <Billboard
        setPlayerVideo={setPlayerVideo}
        setSelectedItem={setSelectedItem}
        mute={mute}
        setMute={setMute}
        showTrailer={showTrailer}
        setShowTrailer={setShowTrailer}
      />
    </section>
  );
}
