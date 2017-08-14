import React, { Component } from 'react';
import { string, array } from 'prop-types';
import './infoBar.scss';

class InfoBar extends Component {
  render() {
    const { title, subtitles } = this.props;
    return (
      <div className="info-bar">
        <div className="title">
          {title}
        </div>
        <div className="subtitles">
          {subtitles.map( s => (
            <div className="subtitle" key={s.name}>
              {s.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

InfoBar.propTypes = {
  title: string.isRequired,
  subtitles: array.isRequired,
};

export default InfoBar;
