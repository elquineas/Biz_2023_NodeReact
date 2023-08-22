import styled from "styled-components";
import MButton from "../../shareComps/MButton";

const Container = styled.div`
  width: 200px;
`;

export default {
  title: "Button",
  component: [MButton],
};

export const 버튼샘플 = () => {
  return (
    <Container>
      <MButton>클릭</MButton>
    </Container>
  );
};
