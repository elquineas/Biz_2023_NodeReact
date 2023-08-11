import { useState } from "react";
import css from "../css/BBsList.module.css";
import ImageModalWindow from "../custComps/ImageModalWindow";
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

  const [modal, setModal] = useState({
    imgSrc: "",
    imgName: "",
    modalState: false,
  });

  const imageView = (imgSrc, imgName) => {
    // let imageWin = new Image();
    let imageWin = window.open("", "", "width=500px, height=500px");
    imageWin.document.write("<html><body style='margin:0'>");
    imageWin.document.write(`<img src='${imgSrc}' width='100%'/>`);
    imageWin.document.write("</body></html>");
    imageWin.document.title = imgName;
  };

  const itemOnClickHandler = (e) => {
    const target = e.target;
    const tagName = target.tagName;
    if (tagName === "TD") {
      const seq = target.closest("TR").dataset.seq;
      alert(`SEQ : ${seq}`);
    } else if (tagName === "IMG") {
      // alert(target.src, target.alt);
      // imageView(target.src, target.alt);
      setModal({
        ...modal,
        imgSrc: target.src,
        imgName: target.alt,
        modalState: true,
      });
    }
  };

  const bbsItems = bbsList.map((bbs) => {
    return (
      <tr key={bbs.b_seq} data-seq={bbs.b_seq}>
        <td>{bbs.b_seq}</td>
        <td>
          <img
            src={`/static/upload/${bbs.b_image}`}
            width="50px"
            alt={`${bbs.b_origin_image}`}
          />
        </td>
        <td>{bbs.b_nickname}</td>
        <td>{bbs.b_title}</td>
        <td>{bbs.b_content}</td>
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
            <th>이미지</th>
            <th>작성자</th>
            <th>제목</th>
            <th>내용</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody onClick={itemOnClickHandler}>{bbsItems}</tbody>
        <ImageModalWindow modal={modal} setModal={setModal} />
      </table>
    </>
  );
};

export default BBsList;
