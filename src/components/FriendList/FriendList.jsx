import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
export const FriendList = ({ friends }) => {
  let friendlist = friends.map(function (friend) {
    return (
      <li key={friend.id}>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </li>
    );
  });
  return <ul className={css["friend-list"]}>{friendlist}</ul>;
};
