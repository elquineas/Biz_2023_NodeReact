import { Form, useLoaderData, redirect } from "react-router-dom";
import cat from "../assets/giphy.gif";
import Button from "../shareComps/Button";
import css from "./BucketDetail.module.scss";
import { deleteBucket, getBucket, saveBucket } from "../modules/bucketFech";

export const detailLoader = async ({ params }) => {
  const { id } = params;
  const bucket = await getBucket(id);
  return { bucket };
};
export const deleteAction = async ({ params }) => {
  if (window.confirm("삭제하시겠습니까?")) {
    await deleteBucket(params.id);
    return redirect("/");
  }
  return redirect(`/content/${params.id}`);
};

export const completeAction = async ({ params }) => {
  const bucket = await getBucket(params.id);
  if (window.confirm("완료 하시겠습니까?")) {
    await saveBucket({ ...bucket, complete: true });
    return redirect("/");
  } else {
    await saveBucket({ ...bucket, complete: false });
    return redirect(`/content/${params.id}`);
  }
};

const BucketDetail = () => {
  const { bucket } = useLoaderData();
  return (
    <article className={css.buck_detail}>
      <div className={css.first}>
        <img src={bucket?.img_src || cat} alt={bucket?.bucket} width="100px" />
      </div>
      <div className={css.last}>
        <h1>{bucket?.bucket || "None"}</h1>
        <div>
          <Form action="edit">
            <Button>수정</Button>
          </Form>
          <Form action="complete" method="POST">
            <Button bgcolor="mediumseagreen">완료</Button>
          </Form>
          <Form action="delete" method="POST">
            <Button bgcolor="tomato">삭제</Button>
          </Form>
        </div>
      </div>
    </article>
  );
};
export default BucketDetail;
