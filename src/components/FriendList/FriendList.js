import React from 'react';
import PropTypes from 'prop-types'; 
import FriendItem from './FriendItem';
import defaultUserImage from './default-user.png'
import styled from "styled-components"

const Section =styled.section`{
  margin: 0;
	padding: 0;
	font-family: sans-serif;
}`

const Ul = styled.ul`{
  margin: 50px;
	width: 400px;
}`
const Li = styled.li`{
  display: flex;
	padding: 15px;
	border-bottom: 1px solid rgba(115, 111, 111, .5);
	font-size: 2em;
	align-items: center;
	&:hover{
  color:blue;
  transition-duration: .5s ; 
}`

const FriendList = ({ friends }) => {
	
	return (
		<Section>
			<Ul >
				{friends.map(friend => {
					return (
						<Li key={friends.id}><FriendItem friendItem={friend}
						
                                        isOnline={friend.isOnline} /></Li>
					)
				})}
			</Ul>
		</Section>
	);
};


FriendList.defaultProps = {
	avatar: defaultUserImage,
};

FriendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			avatar: PropTypes.string,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
			id: PropTypes.number.isRequired,
		})
	),
};

export default FriendList;