import moment from "moment";
import cat from "../img/giphy.gif";
const BucketList = (props) => {
  const { bList, newBDto } = props;
  let today = moment().format("YYYY[-]MM[-]DD");
  let time = moment().format("HH:mm:ss");

  const onResetBtnClick = (e) => {
    today = moment().format("YYYY[-]MM[-]DD");
    time = moment().format("HH:mm:ss");
    newBDto(today, time);
  };

  const bItems = bList.map((item) => {
    return (
      <div className="bucket row">
        <div className="bucket img_box">
          <img src={cat} />
        </div>
        <div className="bucket text_box">{item.bTitle}</div>
      </div>
    );
  });

  return (
    <div className="bucket list">
      <div>
        <input value={today} readOnly />
        <input value={time} readOnly />
        <button type="button" onClick={onResetBtnClick}>
          새로고침
        </button>
      </div>

      <div className="bucket bucklist">{bItems}</div>
    </div>
  );
};
export default BucketList;
