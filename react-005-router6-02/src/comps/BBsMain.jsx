import { useState, useEffect } from "react";
import {
  useRoutes,
  Outlet,
  NavLink,
  Navigate,
  useNavigate,
} from "react-router-dom";
import BBsList from "./BBsList";
import BBsItem from "./BBsItem";
import BBsInput from "./BBsInput";
import { BBsDto as bbsData, BBsList as bbListData } from "../data/BBsData";
import moment from "moment";
import uuid from "react-uuid";
import localforage from "localforage";

const BBsBody = () => {
  return (
    <>
      <h3>자유 게시판</h3>
      <Outlet />
    </>
  );
};
const BBsMain = () => {
  const [bbsDto, setBbsDto] = useState(bbsData);
  const [bbsList, setBbsList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getForage = async () => {
      setBbsList(await localforage.getItem("BBS"));
    };
    getForage();
  }, []);

  useEffect(() => {
    const setForage = async () => {
      await localforage.setItem("BBS", bbsList);
    };
    setForage();
  }, [bbsList]);

  const bbsUpdate = () => {
    bbsList.map((bbs) => {
      if (bbs.id === bbsDto.id) {
        const updateBbs = {
          ...bbs,
          bContent: bbsDto.bContent,
          bSubject: bbsDto.bSubject,
        };
      }
    });
  };

  const bbsInput = () => {
    // 저장 button 을 클릭하면 데이터를 어딘가에 저장하기
    let newBbsDto = { ...bbsData };
    if (!bbsDto.id) {
      newBbsDto = {
        ...bbsDto,
        id: uuid(),
        bDate: moment().format("YYYY[-]MM[-]DD"),
      };
    } else {
      return bbsUpdate;
    }
    setBbsList([...bbsList, newBbsDto]);
    navigate("/bbs");
  };

  const bbsListItemView = bbsList?.map((item, index) => {
    return <BBsItem item={item} key={item.id} seq={index} />;
  });

  const bbsRouter = useRoutes([
    {
      path: "/",
      element: <BBsBody />,
      // path 에 "" 이 붙으면 root 와 함께 보여질 Component
      children: [
        {
          path: "",
          element: (
            <>
              <BBsList>{bbsListItemView}</BBsList>
              <NavLink to="/bbs/writer">글쓰기</NavLink>
            </>
          ),
        },
        {
          path: "writer",
          element: (
            <BBsInput
              bbsDto={bbsDto}
              setBbsDto={setBbsDto}
              bbsInput={bbsInput}
            />
          ),
        },
      ],
    },
  ]);
  return bbsRouter;
};

export default BBsMain;
