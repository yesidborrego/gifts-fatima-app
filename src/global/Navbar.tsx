import { Link, NavLink, useNavigate } from "react-router-dom"
import { Dashboard } from '../gifts/pages/Dashboard';

export const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    // const lastPath = `${pathname}${search}`;
    // localStorage.setItem("lastpath", lastPath);
    // actionLogout();
    navigate("/login", {
      replace: true
    });
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-bgcolor navbar-dark p-3">
      <div className="container-fluid">
        <Link
          className="navbar-brand text-white fw-bold"
          to="/"
        >
          Fatima
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav w-100 d-flex align-items-center">
            <NavLink
              className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
              to={"/list"}
            >
              Lista de regalos
            </NavLink>
            <NavLink
              className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
              to={"/dashboard"}
            >
              Dashboard
            </NavLink>
          </div>

          <hr className='border border-white border-1' />

          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-sm-end align-items-center">
            <ul className="navbar-nav ml-auto d-flex align-items-center">
              <li>
                <span className='nav-link text-admin fw-bold'>
                  Sirli
                </span>
              </li>
              <li>
                <button
                  className="nav-item nav-link btn"
                  onClick={ onLogout }
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
