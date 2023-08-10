import { NavLink } from "react-router-dom";
import "../css/App.css";
const NavList = () => {
  return (
    <div className="main menu">
      <div className="menu day">
        <NavLink to="/">daily</NavLink>
      </div>
      <div className="menu day">
        <NavLink to="/weekly">weekly</NavLink>
      </div>
      <div className="menu month">
        <NavLink to="/monthly">monthly</NavLink>
      </div>
      <div className="menu login">
        <NavLink to="/login">login</NavLink>
      </div>
      <div className="menu logout">
        <NavLink to="/logout">logout</NavLink>
      </div>
      <div className="menu mypage">
        <NavLink to="/mypage">mypage</NavLink>
      </div>
    </div>
  );
};
export default NavList;
