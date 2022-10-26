import styled from 'styled-components';

export const ListButton = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 0;
`;

export const ItemButton = styled.li`
  padding-left: 0;
`;

export const Button = styled.button`
  border-radius: 4px;
  background-color: white;
  border: 1px solid black;
  &:active {
    background-color: red;
  }

  &:first-letter {
    text-transform: uppercase;
  }
`;
