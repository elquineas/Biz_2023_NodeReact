import Button from "../../shareComps/Button";

export default {
  title: "button",
  component: [Button],
};

export const SampleButton = () => <Button>Hello</Button>;
export const SampleTest1 = () => <Button>나를 클릭하세요</Button>;
export const SampleTest2 = () => <Button bgColor="red">빨간버튼</Button>;
export const SampleTest3 = () => (
  <Button bgColor="green" color="orange">
    초록버튼
  </Button>
);
