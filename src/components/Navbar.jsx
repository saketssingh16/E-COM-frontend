import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload(); // forces navbar refresh
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-3">
      <div className="container">
        {/* Toggle button */}
        <button
          className="navbar-toggler me-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Logo */}
        <Link className="navbar-brand fw-bold me-auto me-lg-0" to={token ? "/home" : "/"}>
          SAKE-ITT<span className="text-danger">.</span>
        </Link>

        {/* Links */}
        {token && (
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarContent"
          >
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  HOME
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/collection">
                  COLLECTION
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  ABOUT
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Right Icons */}
        <div className="d-flex gap-3">
          {/* If NOT logged in */}
          {!token && (
            <>
              <Link to="/" className="text-dark">
                <i className="bi bi-person"></i>
              </Link>

              <Link to="/register" className="text-dark">
                Register
              </Link>
            </>
          )}

          {/* If logged in */}
          {token && (
            <>
              <Link to="/cart" className="text-dark">
                <i className="bi bi-cart"></i>
              </Link>

              <button
                onClick={handleLogout}
                className="btn btn-sm btn-outline-danger"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
