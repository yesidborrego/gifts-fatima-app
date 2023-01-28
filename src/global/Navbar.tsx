import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"
import { firebaseErrors, LoginContext } from "../auth";

export const Navbar = () => {
  const navigate = useNavigate();
  const { logout, userData } = useContext(LoginContext);

  const onLogout = async () => {
    try {
      await logout();
      navigate("/login", {
        replace: true,
      });
    } catch (error: any) {
      const [ err ] = firebaseErrors.filter(er => er.code === error.code);
      if(err) {
        console.error(err.value);
      } else {
        console.error(error.code)
      }
    }
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
            {
              userData && userData.admin
              ? (
                <NavLink
                  className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}
                  to={"/dashboard"}
                >
                  Dashboard
                </NavLink>
              )
              : null
            }
          </div>

          <hr className='border border-white border-1' />
          {
              userData && userData.admin
              ? (
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-sm-end align-items-center">
                  <ul className="navbar-nav ml-auto d-flex align-items-center">
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
              )
              : null
            }
        </div>
      </div>
    </nav>
  )
}
