/**
 * @file Header.js
 * @author Code Fellows
 * @description A typical page header
 */
import React from "react";

class Header extends React.Component {

  /**
   * Draw the component
   * 
   * @returns {Component}
   */
  render() {
    return (
      <div id="header">
        <h1>Plan Your Visit to the USA</h1>
        <p>
          Enter a location in the USA below to learn about the weather,
          restaurants, moveies, and more!
        </p>
      </div>
    );
  }
}

export default Header;
