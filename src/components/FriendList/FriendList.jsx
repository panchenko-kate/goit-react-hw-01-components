import PropTypes from 'prop-types';

import { FriendListItem } from "components/FriendListItem/FriendListItem"

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
           {friends.map(friend => (<FriendListItem 
            isOnline={friend.isOnline}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
           />))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array,
}