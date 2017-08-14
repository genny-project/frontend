import React, { Component } from 'react';
import { string } from 'prop-types';
import './navbar.scss';

class Navbar extends Component {
  render() {
    const { appName } = this.props;
    return (
      <div className="navbar">
        {appName}
      </div>
    );
  }
}

Navbar.propTypes = {
  appName: string.isRequired,
};

export default Navbar;
