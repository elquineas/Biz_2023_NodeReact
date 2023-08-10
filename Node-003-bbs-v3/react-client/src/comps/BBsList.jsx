import css from "../css/BBsList.module.css";
import { useBBsContext } from "../provider/BBsProvider";

const BBsList = () => {
  const sampleData = [
    { b_seq: 0, b_nickname: "홍길동", b_title: "활빈당" },
    { b_seq: 1, b_nickname: "이몽룡", b_title: "남원부사" },
    { b_seq: 2, b_nickname: "성춘향", b_title: "광환루" },
    { b_seq: 3, b_nickname: "임꺽정", b_title: "황해도" },
    { b_seq: 4, b_nickname: "장녹수", b_title: "여걸" },
    // 홍길동, 임꺽정, 장길산, 전우치, 일지매, 로빈 후드가
  ];

  const { bbsList, setBBsList } = useBBsContext();

  const bbsItems = bbsList.map((bbs) => {
    return (
      <tr key={bbs.b_seq} data-seq={bbs.b_seq}>
        <td>{bbs.b_seq}</td>
        <td>{bbs.b_nickname}</td>
        <td>{bbs.b_title}</td>
        <td>0</td>
      </tr>
    );
  });

  return (
    <>
      <table className={css.main}>
        <thead>
          <tr>
            <th>SEQ</th>
            <th>작성자</th>
            <th>제목</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>{bbsItems}</tbody>
      </table>
    </>
  );
};

export default BBsList;
