import css from './FriendsListItem.module.scss';

export const FriendsListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
      <img
        className={css.avatar}
        src={avatar}
        alt={name}
        width={30}
        height={30}
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};
