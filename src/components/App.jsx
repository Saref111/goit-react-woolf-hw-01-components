import { Profile } from "./Profile/Profile";

import user from '../data/user.json';

import './App.scss';

export const App = () => {
  return (
    <Profile {...user}/>
  );
};
