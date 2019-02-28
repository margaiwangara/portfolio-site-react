import React from "react";

const Header = props => {
  return (
    <header>
      <span>
        <span />
        <span />
        <span />
      </span>
      <nav>
        <ul className="navbar-nav">
          <li>
            <a href="#" className="active">
              home
            </a>
          </li>
          <li>
            <a href="#">about me</a>
          </li>
          <li>
            <a href="#">portfolio</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
