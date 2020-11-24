import React from "react"; 
import PropTypes  from "prop-types";
import styled from "styled-components";
import defaultUserImage from './default-user.png';
const List = styled.ul`{
display: flex;
	flex-wrap: nowrap;
  justify-content: space-between;
  width:140px;
  
}`;

const StyledList = styled.li`
  list-style: none;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	flex-direction: column;
outline: 1px solid #666;

&:hover{
  color:blue;
  transition-duration: .5s ; 

}`;

const Profile = styled.div`
 {
    background:#e8edf2;
font-weight: 400;
	font-size: 1em;
width: 380px;
	margin: 50px;
	text-align: center;
	color: rgba(0, 0, 0, 1);
	border-bottom: 1px solid rgba(115, 111, 111, .5);
	padding: 20px;
}`;

const Description = styled.div`
 {
  margin-bottom: 2.2em;
  background:white;
}`;

const Avatar = styled.img`
 {
	width: 128px;
	height: 128px;
	border-radius: 50%;
	margin-bottom: 1.5em;
}`;

const Name = styled.p`
{
	font-weight: 600;
	margin-bottom: .7em;
}`;

const Tag = styled.p` {
	margin-bottom: .7em;
	color: rgba(115, 111, 111, 1);
}`;

const Location = styled.p` 
{
	color: rgba(115, 111, 111, 1);
}`;







const Quantity= styled.span` {
	font-weight: 600;
  font-size: .9em;
  background-color:#f3f6f9;
 width:100px;
 
 padding-bottom: 25px;
}
`;

const Label=styled.span `{
	color: rgba(115, 111, 111, 1);
   width:100px;
background-color:#f3f6f9;

padding-top:25px;
}`;

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



