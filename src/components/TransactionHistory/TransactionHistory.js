import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"

import TransactionHistoryItem from './TransactionHistoryItem';

const Th=styled.th` {
	width: 20%;
	 padding: 10px 0; 
	 line-height: 3em;
	background:#02bcd7;
	color:white;
	&:hover{
  color:blue;
  transition-duration: .5s ; 
}`

const thead = styled.thead`{
background-color: rgb(0, 195, 255);
	color: rgb(255, 255, 255);
	text-align: center;
}`

const Tr = styled.tr`{
width: 20%;
	line-height: 3em;
	background:#ecf1f4;
	&:hover{
  color:blue;
  transition-duration: .5s ; 

}`

const Table =styled.table `{
	margin: 50px;
	border-bottom: (1ps solid rgb(106, 120, 124));
}`




const TransactionHistory = ({transactionList}) => {
	return (
	<Table >
		<thead >
			<Tr >
				<Th >Type</Th>
				<Th >Amount</Th>
				<Th >Currency</Th>
			</Tr>
		</thead>
		<tbody>
		{transactionList.map(transactionItem => {
				return (
					<Tr  key={transactionItem.id}><TransactionHistoryItem transactionItem={transactionItem} /></Tr>
				)
			})}
		</tbody>
	</Table>
	)
}


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
		})
	).isRequired,
  };

  
  export default TransactionHistory;