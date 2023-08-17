import styled from "styled-components";
export const Table = styled.table`
  width: 80%;
  margin: 0px auto;
  border-collapse: collapse;
  border: 1px solid #ddd;
  & > .list-tr {
    border-bottom: 1px solid #ddd;
  }
  th {
    padding: 5px;
    background-color: #aaa;
  }
`;

export const Form = styled.form`
  width: 80%;
  margin: 0px auto;
  border-collapse: collapse;
  border: 1px solid #ddd;
  padding: 10px;
`;
export const InputDiv = styled.div`
  width: 90%;
  display: flex;
  & label,
  input {
    margin: 5px;
    padding: 8px;
  }
  & label {
    flex: 1;
    text-align: right;
    color: blue;
  }
  & input {
    flex: 3;
    border-radius: 5px;
  }
  & textarea {
    flex: 3;
  }
`;

export const Button = styled.button`
  border: 0;
  outline: none;
  padding: 12px 16px;
  color: ${({ color }) => (color ? color : "whiter")};
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : "rgb(192, 120, 192)"};
  &:hover {
    box-shadow: 1px 1px 1px 1px black;
    cursor: pointer;
  }
  border-radius: 5px;
`;
