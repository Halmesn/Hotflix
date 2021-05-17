import Billboard from './Billboard';
import Player from './Player';
import FalseLoading from 'components/layout/background/FalseLoading';

import { ProfileContext } from 'components/layout/Layout';

import { useState, useEffect, useContext } from 'react';

export default function Content() {
  const { selectedProfile } = useContext(ProfileContext);
  const [falseLoading, setFalseLoading] = useState(true);
  const [playerVideo, setPlayerVideo] = useState(null);
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
      <Billboard setPlayerVideo={setPlayerVideo} />
      {playerVideo && (
        <Player playerVideo={playerVideo} setPlayerVideo={setPlayerVideo} />
      )}
    </section>
  );
}
