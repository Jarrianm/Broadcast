import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              Focus Group
            </a>
          </div>
          <div className="nav-content">
            <ul className="tabs tabs-transparent">
              <li className="tab diabled">
                <a href="#test4">Sign in with Google</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
