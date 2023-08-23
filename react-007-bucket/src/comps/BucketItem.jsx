import { NavLink } from "react-router-dom";
import css from "./BucketList.module.scss";
import giphy from "../assets/giphy.gif";
import dImage from "../assets/default.png";

const BucketItem = ({ item }) => {
  return (
    <li className={item.complete ? `${css.bucket_complete}` : ""}>
      <img src={item.img_src || giphy} className="App-logo" alt="logo" />
      <NavLink to={`content/${item.id}`}>
        <span className={css.bucket_text}>{item.bucket}</span>
        <span
          className={
            item.complete ? `${css.complete_check}` : `${css.none_check}`
          }
        >
          &#10004;
        </span>
      </NavLink>
    </li>
  );
};
export default BucketItem;
