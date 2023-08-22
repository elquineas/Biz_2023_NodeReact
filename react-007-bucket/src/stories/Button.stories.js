import styled from "styled-components";
import Button from "../../shareComps/Button";

const Container = styled.div`
  width: 200px;
`;

export default {
  title: "Custom Button",
  component: [Button],
};

export const 버튼샘플 = () => {
  return (
    <Container>
      <Button bgcolor="mediumseagreen">클릭</Button>
    </Container>
  );
};

export const 빨간버튼 = () => {
  return (
    <Container>
      <Button bgcolor="red" color="white">
        클릭
      </Button>
    </Container>
  );
};
