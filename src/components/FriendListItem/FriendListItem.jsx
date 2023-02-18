import PropTypes from 'prop-types';
import { Item, Status } from './FriendListItem.styled'
import { GrStatusGoodSmall } from 'react-icons/gr';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return (
        <Item key={id}>
        <Status style={{ color: isOnline ? 'green' : 'red' }}><GrStatusGoodSmall/>{isOnline}</Status>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
        </Item>
    )
}


FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

