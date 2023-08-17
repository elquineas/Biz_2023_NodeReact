import { Table } from "../styled/BBsStyled";
/**
 * 원래 제공되는 react comps 인 table 에 styled 를 적용하여 새로운 Component 로 재생성하기
 */

const BBsList = ({ children }) => {
  return (
    <Table>
      <thead>
        <tr className="list-tr">
          <th>No</th>
          <th>제목</th>
          <th>작성일자</th>
          <th>작성자</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
};

export default BBsList;
