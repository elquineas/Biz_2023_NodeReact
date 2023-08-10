import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import BBsMain from "../comps/BBsMain";
import MyPage from "../comps/MyPage";
import BBsList from "../comps/BBsList";
import BBsInput from "../comps/BBsInput";
import BBsDetail from "../comps/BBsDetail";
// Nav Provider 컴포넌트
// Nav 의 모든 설정(IA) 를 한곳에서 설정하는 컴포넌트
const MainRouter = () => {
  // nav Menu 를 클릭했을때 보여질 화면들 설정하기
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <h1>홈페이지</h1> },
        { path: "/notice", element: <h1>공지사항</h1> },
        {
          path: "/bbs",
          element: <BBsMain />,
          children: [
            { path: "", element: <BBsList /> },
            { path: "insert", element: <BBsInput /> },
            { path: "detail/:seq", element: <BBsDetail /> },
          ],
        },
        { path: "/mypage", element: <MyPage /> },
        { path: "/login", element: <></>, errorElement: <h1>오류 발생</h1> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default MainRouter;
