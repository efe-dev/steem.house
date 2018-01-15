import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <span className="brand">steem.house</span>
        <div className="menu">
          <div className="item active">status</div>
          <div className="item">witnesses</div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
