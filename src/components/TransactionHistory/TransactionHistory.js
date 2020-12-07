import React from 'react';
import PropTypes from 'prop-types';
import { Table, Tr, thead, Th } from './StyledComponents';

import TransactionHistoryItem from './TransactionHistoryItem';

const TransactionHistory = ({ transactionList }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </thead>
      <tbody>
        {transactionList.map(transactionItem => {
          return (
            <Tr key={transactionItem.id}>
              <TransactionHistoryItem transactionItem={transactionItem} />
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.defaultProps = {
  percentage: 0,
};

TransactionHistory.propTypes = {
  transactionList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ).isRequired,
};

export default TransactionHistory;
