import React from 'react'
import { Link, useLocation } from 'react-router-dom'



function Navbar() {
  let location = useLocation();
  // React.useEffect(() => {
  //   console.log(location.pathname);
  // }, [location]);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-sticky">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">i-Notebook</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
              </li>

            </ul>
            <form className="d-flex">
              <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-success " type="submit">Search</button>
              <Link className="btn btn-primary mx-2" to="/login" role="button">LOGIN</Link>
              <Link className="btn btn-primary mx-2" to="/signup" role="button">SIGNUP</Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
