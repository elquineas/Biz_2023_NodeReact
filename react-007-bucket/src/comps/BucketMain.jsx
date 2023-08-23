import styled from "styled-components";
import BucketSearch from "./BucketSearch";
import { useLoaderData, Outlet, redirect } from "react-router-dom";
import { getBucketList, newBucket } from "../modules/bucketFech";
import BucketList from "./BucketList";

const ASideBar = styled.aside`
  // width: 20rem;
  flex: 3;
  height: 100%;
  background-color: #f7f7f7;
  border-right: 2px solid #ccc;
  display: flex;
  flex-direction: column;
`;

const StyledOutlet = styled.div`
  flex: 4;
`;

export const mainLoader = async () => {
  const bucketList = await getBucketList();
  return { bucketList };
};

export const mainAction = async () => {
  const bucket = await newBucket();
  return redirect(`/content/${bucket.id}/edit`);
};

const BucketMain = () => {
  const { bucketList } = useLoaderData();
  // const bucketItemListView = bucketList.map((item) => {
  //   return (
  //     <li>
  //       <img src={giphy} className="App-logo" alt="logo" />
  //       <NavLink to={`content/${item.id}`}>{item.bucket}</NavLink>
  //     </li>
  //   );
  // });

  return (
    <>
      <ASideBar>
        <BucketSearch />
        <BucketList />
      </ASideBar>
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
    </>
  );
};

export default BucketMain;
