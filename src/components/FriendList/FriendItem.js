import React from 'react';
import PropTypes from 'prop-types'; 
import { Spanvalue,Li } from "../../StyledComponents"









function FriendItem( { avatar, name, isOnline } ) {
	
	return (
		<Li>
			<Spanvalue isOnline={isOnline}> </Spanvalue>
			<img src={avatar} alt="friend avatar" width="48" />
			<p>{name}</p>
		</Li>

	);
}




FriendItem.propTypes = {
	friendItem: PropTypes.shape({
		avatar: PropTypes.string,
		name: PropTypes.string.isRequired,
		isOnline: PropTypes.bool.isRequired,
	}),
};


export default FriendItem;
