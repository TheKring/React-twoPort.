import React from "react";
import { Link, withRouter } from "react-router-dom";


function Navigation(props) {
 
  return (
    <div className="navigation" className= "sticky-top">
      <nav className="navbar  navbar-expand navbar-dark bg-dark">
        <div className="container">
 
          <Link className="navbar-brand" to="/">  
           Shear Changes <img 
                src="/img/logo.png"
                height="35"
                width="35"
                alt="Shear Logo"
              /> <i className="font-weight-light">Hair Salon</i> 
          </Link>
            
              <div>
                <ul className="navbar-nav ml-auto">
                  <li
                    className={`nav-item  ${
                      props.location.pathname === "/" ? "active" : ""
                    }`}
                  >
                    <Link className="nav-link" to="/" >
                      Home
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li
                    className={`nav-item  ${
                      props.location.pathname === "/about" ? "active" : ""
                    }`}
                  >
                    <Link className="nav-link" to="/about" >
                      About
                    </Link>
                  </li>
                  <li
                    className={`nav-item  ${
                      props.location.pathname === "/styles" ? "active" : ""
                    }`}
                  >
                    <Link className="nav-link" to="/styles" > 
                      Styles
                    </Link>
                  </li>
                  <li
                    className={`nav-item  ${
                      props.location.pathname === "/contact" ? "active" : ""
                    }`}
                  >
                    <Link className="nav-link" to="/contact" >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
          </div>
       </nav>
    </div>
  );
}

export default withRouter(Navigation);
