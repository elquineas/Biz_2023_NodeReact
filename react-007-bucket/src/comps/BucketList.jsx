import BucketItem from "./BucketItem";
import css from "./BucketList.module.scss";
import { useLoaderData, NavLink } from "react-router-dom";

const BucketList = () => {
  const { bucketList } = useLoaderData();
  const bucketItemListView = bucketList?.map((item) => {
    return <BucketItem key={item.id} item={item} />;
  });
  return <ul className={css.buck_ul}>{bucketItemListView}</ul>;
};

export default BucketList;
