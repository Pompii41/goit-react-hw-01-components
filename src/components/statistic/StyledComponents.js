import styled from 'styled-components';

export const sectionStatistic = styled.section`
   {
    font-size: 1em;
    width: 512px;
    margin: 50px;
    font-family: sans-serif;
    color: rgba(115, 111, 111, 1);
  }
`;

export const headerStatic = styled.h2`
   {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1em;
  }
`;

export const UlStatistic = styled.ul`
   {
    display: flex;
    justify-content: left;
    color: rgba(255, 255, 255, 1);
    flex-wrap: wrap;
  }
`;

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
}`;
