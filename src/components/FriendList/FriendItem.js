import React from 'react';
import PropTypes from 'prop-types'; 
import defaultUserImage from './default-user.png';
import styled from "styled-components"



const Spanvalue = styled.span`{
 width: 25px;
	height: 25px;
	border-radius: 50%;
	margin-right: 20px;
	
  background : ${props => props.isOnline? 'green'  : 'red'};
}`;




const FriendItem = ({ friendItem }) => {

	return (
		<>
			<Spanvalue isOnline={friendItem.isOnline}> </Spanvalue>
			<img  src={friendItem.avatar} alt="friend avatar" width="48" />
			<p >{friendItem.name}</p>
		</>
	)
};


FriendItem.defaultProps = {
	avatar: defaultUserImage,
}

FriendItem.propTypes = {
	friendItem: PropTypes.shape({
		avatar: PropTypes.string,
		name: PropTypes.string.isRequired,
		isOnline: PropTypes.bool.isRequired,
	}),
};


export default FriendItem;
