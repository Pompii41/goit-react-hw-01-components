import React from 'react';
import PropTypes from 'prop-types';

import { Lishka } from '../../StyledComponents';

function StatisticsList({ label, percentage, color }) {
  return (
    <Lishka style={{ backgroundColor: `${color}` }}>
      <span>{label}</span>
      <span>{percentage}</span>
    </Lishka>
  );
}

export default StatisticsList;

StatisticsList.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  percentage: PropTypes.number.isRequired,
};
