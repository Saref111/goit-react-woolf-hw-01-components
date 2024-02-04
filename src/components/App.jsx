import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statisctis';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import stats from '../data/stats.json';
import frineds from '../data/friends.json';
import transactions from '../data/transactions.json';

import './App.scss';
import { FriendsList } from './FriendsList/FriendsList';

export const App = () => {
  return (
    <>
      <div className='flex'>
        <Profile {...user} />
        <div>
          <Statistics title="Upload stats" stats={stats} />
          <Statistics stats={stats} />
        </div>
      </div>
      <FriendsList friends={frineds} />
      <TransactionHistory items={transactions}/>
    </>
  );
};
