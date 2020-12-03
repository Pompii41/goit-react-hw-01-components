import React from "react"; 
import PropTypes  from "prop-types";
import {List,StyledList,Profile,Description,Avatar,Name,Tag,Location,Quantity,Label} from '../../StyledComponents';
import defaultUserImage from './default-user.png';





const UserProfile=( { name, avatar, tag, location,stats } )=> {

  return (
<Profile class="profile">
  <Description class="description">
    <Avatar
      src={avatar}
      alt="user avatar"
      class="avatar"
    />
 <Name class="name">{name}</Name>
    <Tag class="tag">@{tag}</Tag>
    <Location class="location">{location}</Location>
      </Description>

      <List> 
        <StyledList >
          <Label >Followers</Label>
          < Quantity >{stats.followers}</ Quantity>
        </StyledList>
        <StyledList >
          <Label >Views</Label>
          < Quantity >{stats.views}</ Quantity>
        </StyledList>
        <StyledList >
          <Label >Likes</Label>
          < Quantity >{stats.likes}</ Quantity>
        </StyledList>
      </List>
      </Profile>
   ) };


 UserProfile.defaultProps = {
     avatar: defaultUserImage,
 };

UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        vievs: PropTypes.number,
        likes: PropTypes.number,
    }),
};

export default UserProfile;



