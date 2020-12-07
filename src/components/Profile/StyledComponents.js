import styled from 'styled-components';

export const List = styled.ul`
   {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 140px;
  }
`;

export const StyledList = styled.li`
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  flex-direction: column;
  outline: 1px solid #666;

  &:hover {
    color: blue;
    transition-duration: 0.5s;
  }
`;

export const Profile = styled.div`
   {
    background: #e8edf2;
    font-weight: 400;
    font-size: 1em;
    width: 380px;
    margin: 50px;
    text-align: center;
    color: rgba(0, 0, 0, 1);
    border-bottom: 1px solid rgba(115, 111, 111, 0.5);
    padding: 20px;
  }
`;

export const Description = styled.div`
   {
    margin-bottom: 2.2em;
    background: white;
  }
`;

export const Avatar = styled.img`
   {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    margin-bottom: 1.5em;
  }
`;

export const Name = styled.p`
   {
    font-weight: 600;
    margin-bottom: 0.7em;
  }
`;

export const Tag = styled.p`
   {
    margin-bottom: 0.7em;
    color: rgba(115, 111, 111, 1);
  }
`;

export const Location = styled.p`
   {
    color: rgba(115, 111, 111, 1);
  }
`;

export const Quantity = styled.span`
   {
    font-weight: 600;
    font-size: 0.9em;
    background-color: #f3f6f9;
    width: 100px;

    padding-bottom: 25px;
  }
`;

export const Label = styled.span`
   {
    color: rgba(115, 111, 111, 1);
    width: 100px;
    background-color: #f3f6f9;

    padding-top: 25px;
  }
`;
