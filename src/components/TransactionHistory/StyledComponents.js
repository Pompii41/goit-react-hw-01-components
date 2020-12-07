import styled from 'styled-components';

export const Th = styled.th` {
	width: 20%;
	 padding: 10px 0; 
	 line-height: 3em;
	background:#02bcd7;
	color:white;
	&:hover{
  color:blue;
  transition-duration: .5s ; 
}`;

export const thead = styled.thead`
   {
    background-color: rgb(0, 195, 255);
    color: rgb(255, 255, 255);
    text-align: center;
  }
`;

export const Tr = styled.tr`{
width: 20%;
	line-height: 3em;
	background:#ecf1f4;
	&:hover{
  color:blue;
  transition-duration: .5s ; 

}`;

export const Table = styled.table`
   {
    margin: 50px;
    border-bottom: (1ps solid rgb(106, 120, 124));
  }
`;
