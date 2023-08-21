import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ItemContainer = styled.li`
  text-align: left;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.2);
  padding: 10px 14px;
  background-color: #eee;
  list-style-type: none;
  margin-bottom: 5px;
`;

const BucketItem = ({ children }) => {
  return (
    <ItemContainer>
      <NavLink to={`content/${children}`}>{children}</NavLink>
    </ItemContainer>
  );
};

export default BucketItem;
