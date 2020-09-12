import React, { Component } from "react";
import {connect} from 'react-redux'
class Header extends Component {


  render() {
    console.log(this.props)
    return (
      <div>
        <nav className="nav-extended blue">
          <div className="nav-wrapper">
            <a  className="brand-logo">
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
function mapStateToProps(state){
  return{auth: state.auth}
}


export default connect(mapStateToProps) (Header);
