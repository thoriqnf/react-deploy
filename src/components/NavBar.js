import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="App">
        <Link to="/">Home </Link>
        <Link to="/profile">Profile</Link>

        <Link to="/register">register</Link>
        <Link to="/login">login</Link>
      </div>
    </div>
  );
};

export default NavBar;
