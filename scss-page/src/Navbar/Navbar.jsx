import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <a href="/" className="logo">
          Wecare
        </a>
        <nav>
          <ul>
            <li>Job search</li>
            <li>
              <a href="/">be on one's mind!</a>
            </li>
            <li>
              <a href="/">message</a>
            </li>
            <li>
              <a href="/" className="active">
                My page
              </a>
            </li>
            <li>
              <a href="/">
                <button className="link-button">N</button>
              </a>
            </li>
          </ul>
          <a href="/">
            <button className="logout-button">Logout</button>
          </a>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
