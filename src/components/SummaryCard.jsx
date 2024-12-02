import React from 'react';
import PropTypes from 'prop-types';

const SummaryCard = ({ title, value, color }) => (
  <div className={`${color} p-3 sm:p-4 md:p-5 rounded-lg shadow-md`}>
    <h3 className="text-sm sm:text-base md:text-lg font-semibold">{title}</h3>
    <p className="text-xs sm:text-sm md:text-base">{value}</p>
  </div>
);

SummaryCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  color: PropTypes.string.isRequired,
};

export default SummaryCard;
