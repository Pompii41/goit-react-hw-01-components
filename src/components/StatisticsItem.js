import React from 'react';
import PropTypes from 'prop-types'; 



const StatisticsItem = ({statItem}) => {
	return (
		<>
		<span className="label">.{statItem.label}</span>
		<span className="percentage">{statItem.percentage}%</span>
		</>
	)
}


StatisticsItem.protoType = {
	statItem: PropTypes.shape({
		label: PropTypes.string,
		percentage: PropTypes.number,
	}).isRequired,
};

export default StatisticsItem; 