import { Form } from "react-router-dom";
import Input from "../shareComps/Input";
import Button from "../shareComps/Button";
import style from "./BucketInput.module.css";

const BucketInput = () => {
  return (
    <div className={style.input_box}>
      <Input />
      {/* Form 라우터에 들어있는 from 태그 */}
      <Form method="GET" action="content/new">
        <Button bgColor="mediumseagreen">새로작성</Button>
      </Form>
    </div>
  );
};
export default BucketInput;
