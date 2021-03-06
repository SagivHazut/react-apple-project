import { NavLink } from "react-router-dom";
import "./NavBarComponent.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import apple from "../../assets/apple.png";

const NavBarComponent = (props) => {
  const dispatch = useDispatch();

  const IsloggedInRedux = useSelector((state) => state.auth.loggedIn);

  let logout = () => {
    localStorage.clear();
    dispatch(authActions.logout());
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src={apple}
            alt="appleicon"
            style={{ width: "30px", height: "30px" }}
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/home"
                activeClassName="activeLink"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/aboutpage"
                activeClassName="activeLink"
              >
                About
              </NavLink>
            </li>
            <NavLink
              className="nav-link"
              aria-current="page"
              to="/cardspanel"
              activeClassName="activeLink"
            >
              Cards Panel
            </NavLink>
          </ul>
          {IsloggedInRedux === true ? (
            <ul className="navbar-nav justify-content-end mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/login"
                  activeClassName="activeLink"
                  onClick={logout}
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav justify-content-end mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/login"
                  activeClassName="activeLink"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/signup"
                  activeClassName="activeLink"
                >
                  Register
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
