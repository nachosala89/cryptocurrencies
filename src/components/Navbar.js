import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light panel-bg border-bottom">
    <div className="d-flex container justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <NavLink to="/" className="nav-link" exact="true">
          <FontAwesomeIcon icon={faChevronLeft} className="back-btn" />
        </NavLink>
      </div>
      <div>
        <span>The Crypto Cave</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faMicrophone} className="me-3" />
        <FontAwesomeIcon icon={faCog} className="me-2" />
      </div>
    </div>
  </nav>
);

export default Navbar;
