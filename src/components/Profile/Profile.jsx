import PropTypes from 'prop-types';
import { Item, Li, Ul, Name, Label, Span, Img } from './Profile.styled';
const defaultAvatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png';

export const Profile = ({ username, tag, location, avatar = {defaultAvatar}, stats }) => {
    return (
        <Item>
            <div className="description">
                <Img
                src={avatar}
                alt="User avatar"
                className="avatar"
                />
                <Name>{username}</Name>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>

            <Ul>
                <Li>
                <Label>Followers</Label>
                <Span>{stats.followers}</Span>
                </Li>
                <Li>
                <Label>Views</Label>
                <Span>{stats.views}</Span>
                </Li>
                <Li>
                <Label>Likes</Label>
                <Span>{stats.likes}</Span>
                </Li>
            </Ul>
        </Item>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
}