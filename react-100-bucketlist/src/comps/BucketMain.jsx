import { useState } from "react";
import uuid from "react-uuid";
import BucketInput from "./BucketInput";
import BucketList from "./BucketList";
import "../css/Bucket.css";
import { BucketDto } from "../data/BucketData";

const BucketMain = () => {
  const [bDto, setBDto] = useState(BucketDto);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [bList, setBList] = useState([]);

  const newBDto = (date, time) => {
    setTitle("");
    setContent("");
    setBDto({ ...BucketDto, id: uuid() });
  };
  const saveBDto = () => {
    setBDto({ ...bDto, bTitle: title, bContent: content });
  };
  const saveBList = (id) => {
    const addDto = { ...bDto };
    const updateBucket = bList.map((bucket) => {
      if (bucket.id === id) {
        return { ...bDto, bTitle: title, bContent: content };
      }
      return bucket;
    });
    setBList([...bList, addDto]);
  };
  return (
    <div className="bucket container">
      <div className="bucket title"> Bucket List </div>
      <div className="bucket box">
        <BucketList bList={bList} bDto={bDto} newBDto={newBDto} />
        <div className="bucket line"></div>
        <BucketInput
          bDto={bDto}
          saveBDto={saveBDto}
          saveBList={saveBList}
          content={content}
          setContent={setContent}
          title={title}
          setTitle={setTitle}
        />
      </div>
      <div className="bucket footer">CopyRight &copy; elquineas@naver.com</div>
    </div>
  );
};
export default BucketMain;
