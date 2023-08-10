import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import DailyMain from "../comps/DailyMain";
import WeeklyMain from "../comps/WeeklyMain";

const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <DailyMain /> },
        { path: "/daily", element: <DailyMain /> },
        { path: "/weekly", element: <WeeklyMain /> },
        { path: "/monthly", element: <></>, errorElement: <h1>오류 발생</h1> },
        { path: "/login", element: <></>, errorElement: <h1>오류 발생</h1> },
        { path: "/mypage", element: <></>, errorElement: <h1>오류 발생</h1> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default MainRouter;
