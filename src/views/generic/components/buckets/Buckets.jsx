import React, { Component } from 'react';
import { node } from 'prop-types';
import './buckets.scss';

class Buckets extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="buckets">
        { children }
      </div>
    );
  }
}

Buckets.propTypes = {
  children: node,
};

Buckets.defaultProps = {
  children: null,
};

export default Buckets;
