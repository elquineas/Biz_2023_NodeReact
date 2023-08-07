const CalcList = (props) => {
  return (
    <div className="list">
      <div>{props.calcList.plus}</div>
      <div>{props.calcList.minus}</div>
      <div>{props.calcList.multiply}</div>
      <div>{props.calcList.division}</div>
    </div>
  );
};

export default CalcList;
