import React from 'react';
import PropTypes from 'prop-types';

const TransactionHistoryItem = ({ transactionItem }) => {
  return (
    <>
      <th>{transactionItem.type}</th>
      <th>{transactionItem.amount}</th>
      <th>{transactionItem.currency}</th>
    </>
  );
};

TransactionHistoryItem.defaultProps = {
  percentage: 0,
};

TransactionHistoryItem.propTypes = {
  transactionItem: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }).isRequired,
};

export default TransactionHistoryItem;
