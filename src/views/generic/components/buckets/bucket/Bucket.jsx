import React, { Component } from 'react';
import { node, string, object } from 'prop-types';
import './bucket.scss';

class Bucket extends Component {
  render() {
    const { children, title, count } = this.props;
    return (
      <div className="bucket">
        <div className="title-holder">
          <div className="title">{title}</div>
          { count && (
            <div className="count">
              <span className="value">{count.value}</span> / {count.total}
            </div>
          )}
        </div>
        { children }
      </div>
    );
  }
}

Bucket.propTypes = {
  children: node,
  title: string,
  count: object,
};

Bucket.defaultProps = {
  children: null,
  title: '',
  count: null,
};

export default Bucket;
