import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const totalCount = this.props.totalCount;
    return (
      <nav className="navbar">
        <span>
          <i className="navbar-logo fas fa-leaf"></i>
        </span>
        <span>Habit Tracker</span>
        <span className="navbar-count">{totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
