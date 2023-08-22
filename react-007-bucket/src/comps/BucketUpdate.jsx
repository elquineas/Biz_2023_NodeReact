import { useLoaderData } from "react-router-dom";
import { getBucket } from "../modules/bucketFech";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 3;
`;
const StyledContent = styled.div`
  flex: 1;
  //   border: 1px solid orange;
  display: flex;
  & .form_text {
    flex: 4;
    display: flex;
    flex-direction: column;
    // text-align: right;

    & > div {
      align-items: center;
      //   border: 1px solid orange;
      display: flex;
      flex: 1;
      & label {
        flex: 2;
      }
      & input {
        height: 30px;
        border: none;
        flex: 3;
        margin-right: 5px;
      }
    }
  }
  & .form_btn {
    // border: 1px solid orange;
    flex: 1;
    & button {
      width: 100%;
      height: 100%;
    }
  }
`;
const StyledImage = styled.div`
  //   border: 1px solid blue;
  //   align-items: center;
  flex: 5;
`;

export const updateLoader = ({ params }) => {
  return getBucket(params.id);
};

const BucketUpdate = () => {
  const bucket = useLoaderData();
  return (
    <StyledForm>
      <StyledContent>
        <div className="form_text">
          <div>
            <label htmlFor="">작성일자</label>
            <input type="text" value={bucket.sdate} />
          </div>
          <div>
            <label htmlFor="">작성시각</label>
            <input type="text" value={bucket.stime} />
          </div>
          <div>
            <label htmlFor="">하고싶은일</label>
            <input type="text" value={bucket.bucket} />
          </div>
        </div>
        <div className="form_btn">
          <button>저장</button>
        </div>
      </StyledContent>
      <StyledImage>이미지</StyledImage>
    </StyledForm>
  );
};

export default BucketUpdate;
