import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import BucketContent from "../comps/BucketContent";
import BucketMain from "../comps/BucketMain";

const MainRouterProvider = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Navigate to="/bucket" /> },
    {
      path: "bucket",
      element: <BucketMain />,
      children: [
        { path: "content/new", element: <h1>새로작성</h1> },
        { path: "content/:id", element: <BucketContent /> },
        // content/url url이 id로 다 흡수가 되기때문에 path를 늘려줘야한다.
        // ex) { path: "content/:id/edit", element: <BucketContent /> },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default MainRouterProvider;
