import PropTypes from 'prop-types';
import { List } from './FriendList.styled'
import { FriendListItem } from "components/FriendListItem/FriendListItem"

export const FriendList = ({ friends }) => {
    return (
        <List>
           {friends.map(friend => (<FriendListItem 
            isOnline={friend.isOnline}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
           />))}
        </List>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array,
}