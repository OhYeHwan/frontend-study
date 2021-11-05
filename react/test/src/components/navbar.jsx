import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    console.log("navbar");
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
