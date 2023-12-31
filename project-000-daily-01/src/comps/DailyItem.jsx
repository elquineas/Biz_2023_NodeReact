//부모 Component 에서 전달한 Properties는 Props 라는 키워드를 매개변수로 지정하여 받는다
const DailyItem = (props) => {
  const { item, itemComplete, itemDelete, updateItemSelect } = props;

  const compClickHandler = (e, id) => {
    itemComplete(id);
  };
  const deleteClickHandler = (e, id) => {
    itemDelete(id);
  };
  const contentClickHandler = (e, id) => {
    updateItemSelect(id);
  };

  return (
    <div className="item">
      <div className="delete" onClick={(e) => deleteClickHandler(e, item.id)}>
        &times;
      </div>
      <div className="sdate">
        <div>{props.item.sdate}</div>
        <div>{props.item.stime}</div>
      </div>
      <div
        className={props.item.complete ? "content line" : "content"}
        onClick={(e) => contentClickHandler(e, item.id)}
      >
        {props.item.content}
      </div>
      <div className="complete" onClick={(e) => compClickHandler(e, item.id)}>
        &#x2713;
      </div>
    </div>
  );
};

export default DailyItem;
