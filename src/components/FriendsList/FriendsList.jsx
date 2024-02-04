import { FriendsListItem } from './FriendsListItem/FriendsListItem';
import css from './FriendsList.module.scss';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(friend => (
        <FriendsListItem {...friend} key={friend.id} />
      ))}
    </ul>
  );
};
