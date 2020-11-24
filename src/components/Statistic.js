import React from 'react';
import PropTypes from 'prop-types'; 


import styled from "styled-components"
import StatisticsItem from './StatisticsItem';


const Section = styled.section`{
	font-size: 1em;
	width: 512px;
	margin: 50px;
	font-family: sans-serif;
	color: rgba(115, 111, 111, 1);
}`

const H2 = styled.h2`{
	text-transform: uppercase;
	text-align: center;
	margin-bottom: 1em;
}`

const Ul = styled.ul`{
	display: flex;
	justify-content: left;
	color: rgba(255, 255, 255, 1);
	flex-wrap: wrap;
}`

const Li = styled.li`{
	width: 50px;
	height: 50px;
	border: 1px solid rgba(0, 0, 0, 1);
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px 15px;
	line-height: 1.5em;
	&:hover{
  color:blue;
  transition-duration: .5s ; 
}`

const colors = {
	docx: '#2aada5',
	pdf: '#862aad',
	mp3: '#a84a18',
	psd: '#0b576e',
}

const Statistics = ({ statisticsList }) => {
	return (
		<Section >
			<H2 >Upload stats</H2>
			<Ul >
				{statisticsList.map(statisticsItem => {
					const propLabelFormat = statisticsItem.label;
					return <Li
					key={statisticsItem.id} 
					
					style={{background: colors[propLabelFormat]}}>
						<StatisticsItem  statItem = {statisticsItem}/>
				  </Li>
				})}
			</Ul>
		</Section>
	)
};


Statistics.propTypes = {
	statisticsList: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			label: PropTypes.string,
			percentage: PropTypes.number,
		})
	).isRequired,
};

export default Statistics;