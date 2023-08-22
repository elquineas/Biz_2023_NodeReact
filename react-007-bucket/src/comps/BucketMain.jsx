import styled from "styled-components";
import BucketSearch from "./BucketSearch";
import { NavLink, useLoaderData, Outlet } from "react-router-dom";
import { getBucketList, newBucket } from "../modules/bucketFech";
import giphy from "../giphy.gif";

const ASideBar = styled.aside`
  // width: 20rem;
  flex: 2;
  height: 100%;
  background-color: #f7f7f7;
  border-right: 2px solid #ccc;
  display: flex;
  flex-direction: column;
`;

const UL = styled.ul`
  list-style: none;
  & li {
    display: flex;
    // flex-direction: column;
    width: 95%;
    margin: 10px auto;
    text-align: left;
    &:hover {
      background-color: #ddd;
      cursor: pointer;
    }
  }
  & img {
    border: 1px solid #ccc;
    border-radius: 50%;
    flex: 1;
    height: 35px;
    margin-right: 5px;
  }
  & a {
    flex: 8;
    padding: 8px 5px;
    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.2),
      2px 3px 3px 3px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    display: inline-block;
    width: 75%;
    color: inherit;
  }
`;

export const mainLoader = async () => {
  const bucketList = await getBucketList();
  return { bucketList };
};

export const mainAction = async () => {
  const bucket = await newBucket();
  return "";
};

const BucketMain = () => {
  const { bucketList } = useLoaderData();
  const bucketItemListView = bucketList.map((item) => {
    return (
      <li>
        <img src={giphy} className="App-logo" alt="logo" />
        <NavLink to={`content/${item.id}`}>{item.bucket}</NavLink>
      </li>
    );
  });

  return (
    <>
      <ASideBar>
        <BucketSearch />
        <UL>{bucketItemListView}</UL>
      </ASideBar>
      <Outlet />
      {/* <div>
        <h1>Detail</h1>
      </div> */}
    </>
  );
};

export default BucketMain;
