import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statisctis";

import user from '../data/user.json';
import stats from '../data/stats.json';

import './App.scss';

export const App = () => {
  return (
    <>
      <Profile {...user}/>
      <Statistics title="Upload stats" stats={stats} />
      <Statistics stats={stats} />
    </>
  )
};


