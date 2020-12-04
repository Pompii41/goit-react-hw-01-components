
import styled from "styled-components"




	export const Section = styled.section`{
  margin: 0;
	padding: 0;
	font-family: sans-serif;
}`

export const Ul = styled.ul`{
  margin: 50px;
	width: 400px;
}`

export const  Li = styled.li`{
  display: flex;
	padding: 15px;
	border-bottom: 1px solid rgba(115, 111, 111, .5);
	font-size: 2em;
	align-items: center;
	&:hover{
  color:blue;
  transition-duration: .5s ; 
}`

export  const  Spanvalue = styled.span`{
 width: 25px;
	height: 25px;
	border-radius: 50%;
	margin-right: 20px;
	
  background : ${props => props.isOnline? 'green'  : 'red'};
}`;
	



