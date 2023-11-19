import styled from 'styled-components';

export const ToppingsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ToppingOption = styled.div`
  padding: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? 'lightblue' : 'white')};
`;