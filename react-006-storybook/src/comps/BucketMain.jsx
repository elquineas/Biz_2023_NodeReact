import { useState } from "react";
import styled from "styled-components";
import { Outlet, useRoutes, Navigate } from "react-router-dom";
import BucketList from "./BucketList";
import BucketItem from "./BucketItem";
import BucketContent from "./BucketContent";
import BucketInput from "./BucketInput";

const ASeideBar = styled.aside`
  width: 20rem;
  height: 100%;
  background-color: #f7f7f7;
  border-right: solid 2px #aaa;
  display: flex;
  flex-direction: column;
  & > * {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const mainAction = async () => {
  return <Navigate to="content/3" />;
};

// 완전한 ES6 함수 코드 return, () 생략가능
// const BucketMain = () => (<>Bucket</>);
// const BucketMain = () => <>Bucket</>;
// return 을 생략하는 한줄코드는
// const [bucket, useBucket] = useState();를 사용불가능 (사용시 2줄짜리 코드가 되기 때문)
const BucketMain = () => {
  const [bucket, setBucket] = useState();
  const [bucketList, setBucketList] = useState([
    "개발자 되기",
    "리액트 정복",
    "스프링 정복",
  ]);

  const BuycketItemListView = bucketList.map((item) => {
    return <BucketItem>{item}</BucketItem>;
  });
  return (
    <>
      <ASeideBar>
        <BucketInput />
        <BucketList>
          <ul>{BuycketItemListView}</ul>
        </BucketList>
      </ASeideBar>
      <div>
        <Outlet />
      </div>
    </>
  );
};

// const BucketMain = () => {
//   /**
//    * path : "content/:id, element:<BucketContent />"
//    * 만약 content/우리나라 라는 요청이 오면
//    * content/* 의 path를 찾고, 우리나라 라는 문자열을 id 변수에 저장하여
//    * BucketContent 컴포넌트에게 전달하라
//    */
//   const routing = useRoutes([
//     {
//       path: "/",
//       element: <BucketMainBody />,
//       children: [{ path: "content/:id", element: <BucketContent /> }],
//     },
//   ]);
//   return routing;
// };

export default BucketMain;
