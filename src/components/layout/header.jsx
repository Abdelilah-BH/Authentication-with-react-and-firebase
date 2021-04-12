import { useState } from "react";
import { useAuth } from "../../contexts/auth";
import { Link } from "react-router-dom";
import search from "bootstrap-icons/icons/search.svg";
import { Alert } from "react-bootstrap";

const Header = () => {
  const [error, setError] = useState("");
  const { user, logout } = useAuth();
  const handleLogout = async () => {
    try {
      setError("");
      await logout();
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand flex-fill" to="/">
          Find My Book
        </Link>
        <form className="d-flex flex-fill">
          {error && <Alert variant="danger">error</Alert>}
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-primary"
              type="button"
              id="button-addon2"
            >
              <img src={search} alt="..." />
            </button>
          </div>
        </form>
        <div className="flex-fill">
          <div className="collapse navbar-collapse float-end">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {!user?.email && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
              {user?.email && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      onClick={handleLogout}
                      className="nav-link"
                      to="/login"
                    >
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
