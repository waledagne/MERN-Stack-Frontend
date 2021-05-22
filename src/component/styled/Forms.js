import styled from "styled-components";

export const Form = styled.form`
  color: palevioletred;
  display: block;
  width: 300px;
  margin: 60px auto;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color:  #00b38f;
  display: block;
`;

export const Input = styled.input`
  padding: 0.5em;
  color: palevioletred;
  background: white;
  border: solid #ccc;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 0.5em;
`;

export const Message = styled.h1`
  margin-bottom: 0.5em;
  color: #00b38f;
  text-align:center;
  display: block;
`;

export const Button = styled.button`
  color: ${props => props.primary ? "Blue":"Red"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 3px;
`;
