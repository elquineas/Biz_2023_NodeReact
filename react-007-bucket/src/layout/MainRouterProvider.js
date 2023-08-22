import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BucketMain, { mainLoader, mainAction } from "../comps/BucketMain";
// import { bucketLoader, bucketAction } from "../modules/routerAction";
import BucketDetail from "../comps/BucketDetail";
import BucketUpdate, { updateLoader } from "../comps/BucketUpdate";

/**
 *  RouterProvider 에 연결하여 각종 Routing 을 수행하는 설정만들기
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <BucketMain />,
    loader: mainLoader,
    action: mainAction,
    children: [
      { path: "content/:id", element: <BucketUpdate />, loader: updateLoader },
    ],
  },
]);
/**
 * react-router-dom 을 사용한 화면 layout 구현하는 도구
 * ...Provider 는 프로젝트 전반에서 routing (path 변경, 클릭, 다른화면 전환) 등을 쉽게 구현해 주는 도구
 * Provider 로 감싸는 부분은 router 를 사용한 Data Handling 이 가능하다
 * router v6.4 이상에서는 Routing 을 구현할때 BrowserRouter 컴포넌트를 사용하지 않고,
 *      createBrowserRouter 함수를 사용한다.
 * ...Provider 는 createBrowserRouter 함수로 만든 4 환경을 쉽게 구현하도록 도와주는 도구
 */
const MainRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default MainRouterProvider;
