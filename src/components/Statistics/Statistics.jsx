import PropTypes from 'prop-types';
import { StatisticsList } from './Statistics.styled';
export const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <StatisticsList>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      {total !== 0 ? (
        <p>Positive feedback:{percent}%</p>
      ) : (
        <p>There is no feedback</p>
      )}
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percent: PropTypes.number,
};
