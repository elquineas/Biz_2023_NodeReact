import styled from "styled-components";
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
  margin: 5px 0;
`;
