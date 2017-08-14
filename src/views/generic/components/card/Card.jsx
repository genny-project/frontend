import React, { Component } from 'react';
import { string } from 'prop-types';
import './card.scss';

class Card extends Component {
  render() {
    const { name, status } = this.props;
    return (
      <div className="card">
        <span>{name}</span>
        <div className={`status ${status}`} />
      </div>
    );
  }
}

Card.propTypes = {
  name: string,
  status: string,
};

Card.defaultProps = {
  name: '',
  status: 'grey',
};

export default Card;
