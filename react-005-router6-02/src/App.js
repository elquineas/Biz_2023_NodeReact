import logo from "./logo.svg";
import "./css/App.css";
import { useRoutes, Outlet, useNavigate } from "react-router-dom";
import BBsMain from "./comps/BBsMain.jsx";
import { Button } from "./styled/MyButton";

const AppBody = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Outlet />
    </div>
  );
};
function App() {
  // App Com,ponent 내에 inner Component
  const navigate = useNavigate();
  // App.js Componenet 를 화면에 표현하면, react-router-dom 에 의해서 path 를 감지하고
  // Appbody Component 를 화면에 렌더링 한다.
  const appRouter = useRoutes([
    {
      path: "/",
      element: (
        <>
          <AppBody />
        </>
      ),
      children: [
        {
          path: "",
          element: (
            <Button
              bgColor="tomato"
              color="black"
              onClick={() => navigate("/bbs")}
            >
              게시판 열기
            </Button>
          ),
        },
        {
          path: "/bbs/*",
          element: <BBsMain />,
        },
      ],
    },
    ,
  ]);
  return appRouter;
}

export default App;
