import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;
export const Card = styled.div`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-gap: 10px;
  align-items: center;
  color: black;
  font-weight: 100;
  box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
  transition: all 0.3s linear;
  &:hover {
    box-shadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const Table = styled.table `
font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 75%;
`;

export const Header = styled.thead `
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;

`;
