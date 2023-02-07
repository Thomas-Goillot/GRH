import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    const navElements = [["Accueil","/"],["Graph","/graph"]];

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          GRH
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navElements.map((element, index) => (
              <li key={index} className={"nav-item "} >
                <NavLink
                  to={element[1]}>
                  {element[0]}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
};

export default Navigation;