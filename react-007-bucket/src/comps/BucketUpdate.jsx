import { Form, useLoaderData, redirect, useSubmit } from "react-router-dom";
import { getBucket, saveBucket } from "../modules/bucketFech";
import styled from "styled-components";
import css from "./BucketUpdate.module.scss";
import Button from "../shareComps/Button";
import dImage from "../assets/default.png";
import { useRef } from "react";

const StyledContent = styled.div`
  flex: 1;
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
`;

export const updateAction = async ({ request, params }) => {
  const { id } = params;
  const result = await getBucket(id);

  const formData = await request.formData();

  const inputBucket = Object.fromEntries(formData);

  const newBucket = { ...result, ...inputBucket };
  await saveBucket(newBucket);
  return redirect(`/content/${id}`);
};

const BucketUpdate = () => {
  const { bucket } = useLoaderData();
  const imgRef = useRef();
  const submit = useSubmit();

  const imageOnCLick = () => {
    imgRef.current.click();
  };

  const onFileChange = (e, bucket) => {
    const files = e.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = async () => {
        console.log(reader.result);
        await saveBucket({ ...bucket, img_src: reader.result });
        return submit(null);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Form method="POST" className={css.bucket_form}>
      <article className={css.first}>
        <input
          type="file"
          onChange={(e) => onFileChange(e, bucket)}
          accept="image/*"
          ref={imgRef}
        />
        <StyledContent>
          <div className="form_text">
            <div>
              <label htmlFor="">작성일자</label>
              <input type="date" name="sdate" defaultValue={bucket.sdate} />
            </div>
            <div>
              <label htmlFor="">작성시각</label>
              <input type="time" name="stime" defaultValue={bucket.stime} />
            </div>
            <div>
              <label htmlFor="">하고싶은일</label>
              <input name="bucket" defaultValue={bucket.bucket} />
            </div>
          </div>
        </StyledContent>
        <div className={css.image}>
          <img src={bucket.img_src || dImage} alt="" onClick={imageOnCLick} />
        </div>
        <div className="form_btn">
          <Button>저장</Button>
        </div>
      </article>
    </Form>
  );
};

export default BucketUpdate;
