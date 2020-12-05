import React from 'react';
import PropTypes from 'prop-types';
import FriendItem from './FriendItem';
import defaultUserImage from './default-user.png';

import { Ul } from '../../StyledComponents';

export default function FriendList({ list }) {
  return (
    <Ul>
      {list.map(item => {
        return (
          <FriendItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        );
      })}
    </Ul>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
FriendItem.defaultProps = {
  avatar: defaultUserImage,
};
