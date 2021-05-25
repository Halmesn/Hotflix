import Profile from './Profile';
import Content from './Content';

import { ProfileContext } from 'components/layout/Layout';

import { useContext } from 'react';

export default function Hotflix() {
  const { selectedProfile, profile } = useContext(ProfileContext);

  return selectedProfile ? <Content /> : profile !== undefined && <Profile />;
}
