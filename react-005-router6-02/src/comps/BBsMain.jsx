import { useState, useEffect } from "react";
import { useRoutes, Outlet, NavLink } from "react-router-dom";
import BBsList from "./BBsList";
import BBsItem from "./BBsItem";
import BBsInput from "./BBsInput";
import { BBsDto as bbsData, BBsList as bbListData } from "../data/BBsData";
import { Button } from "../styled/BBsStyled";

const BBsMain = () => {
  const [bbsDto, setBbsDto] = useState(bbsData);
  const [bbsList, setBbsList] = useState(bbListData);
  const bbsListItemView = bbsList?.map((item) => {
    return <BBsItem item={item} key={item.id} />;
  });

  const BBsBody = () => {
    return (
      <>
        <h3>자유 게시판</h3>
        <Outlet />
      </>
    );
  };
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
          element: <BBsInput bbsDto={bbsDto} setBbsDto={setBbsDto} />,
        },
      ],
    },
  ]);
  return bbsRouter;
};

export default BBsMain;
