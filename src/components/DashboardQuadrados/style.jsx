import styled from 'styled-components';

export const Card = styled.div`
  border: 2px solid black;
  border-radius: 20px;
  padding: 20px;
  width: 15vw;
  height: 15vh;
`;

export const Title = styled.h2`
  color: black;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Content = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Number = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-right: 8px;
`;

export const Label = styled.span`
  font-weight: bold;
  color: #929292;
`;