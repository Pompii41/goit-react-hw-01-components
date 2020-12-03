
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
	



export const List = styled.ul`{
display: flex;
	flex-wrap: nowrap;
  justify-content: space-between;
  width:140px;
  
}`;

export const StyledList = styled.li`
  list-style: none;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	flex-direction: column;
outline: 1px solid #666;

&:hover{
  color:blue;
  transition-duration: .5s ; 

}`;

export const Profile = styled.div`
 {
    background:#e8edf2;
font-weight: 400;
	font-size: 1em;
width: 380px;
	margin: 50px;
	text-align: center;
	color: rgba(0, 0, 0, 1);
	border-bottom: 1px solid rgba(115, 111, 111, .5);
	padding: 20px;
}`;

export const Description = styled.div`
 {
  margin-bottom: 2.2em;
  background:white;
}`;

export const Avatar = styled.img`
 {
	width: 128px;
	height: 128px;
	border-radius: 50%;
	margin-bottom: 1.5em;
}`;

export const Name = styled.p`
{
	font-weight: 600;
	margin-bottom: .7em;
}`;

export const Tag = styled.p` {
	margin-bottom: .7em;
	color: rgba(115, 111, 111, 1);
}`;

export const Location = styled.p` 
{
	color: rgba(115, 111, 111, 1);
}`;







export const Quantity= styled.span` {
	font-weight: 600;
  font-size: .9em;
  background-color:#f3f6f9;
 width:100px;
 
 padding-bottom: 25px;
}
`;

export const Label=styled.span `{
	color: rgba(115, 111, 111, 1);
   width:100px;
background-color:#f3f6f9;

padding-top:25px;
}`;



export const sectionStatistic = styled.section`{
	font-size: 1em;
	width: 512px;
	margin: 50px;
	font-family: sans-serif;
	color: rgba(115, 111, 111, 1);
}`

export const headerStatic = styled.h2`{
	text-transform: uppercase;
	text-align: center;
	margin-bottom: 1em;
}`

export const UlStatistic = styled.ul`{
	display: flex;
	justify-content: left;
	color: rgba(255, 255, 255, 1);
	flex-wrap: wrap;
}`

export const Lishka = styled.li`{
	width:75px;
	height: 75px;
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

