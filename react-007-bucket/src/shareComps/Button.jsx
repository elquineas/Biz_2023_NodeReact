import styled from "styled-components";

const StyledButton = styled.button`
  color: ${({ color }) => (color ? color : "white")};
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "#7362ff")};
  border-radius: 5px;
  border: 0;
  outline: none;
  padding: 0.5rem 0.75rem;
  margin: 4px 0;
  cursor: pointer;
  width: 100%;
  font-weight: 700;
  &:hover {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.7);
    background-color: #a99fee;
  }
`;

const Button = (props) => {
  const { children, bgcolor, color, type = "submit" } = props;
  return (
    <StyledButton bgcolor={bgcolor} color={color} type={type}>
      {children}
    </StyledButton>
  );
};
export default Button;
