import { UlStatistic } from '../../StyledComponents';
import React from 'react';
import StatisticsList from './StatisticsList';
import PropTypes from 'prop-types';

export default function Statistics({ stats }) {
  return (
    <UlStatistic>
      {stats.map(item => {
        return (
          <StatisticsList
            key={item.id}
            label={item.label}
            percentage={`${item.percentage}%`}
            color={color()}
          />
        );
      })}
    </UlStatistic>
  );
}

function color() {
  return `rgb(${setRandomColor()},${setRandomColor()},${setRandomColor()})`;
}

function setRandomColor() {
  let rand = 0 + Math.random() * (255 + 1 - 0);
  return Math.floor(rand);
}

Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.array.isRequired,
};
