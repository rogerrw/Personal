import React from 'react';

const text = require('../text');

export default class About extends React.Component {
  render() {
    return (
      <div id="about">
        <div id="about-content">
          <p>{text.ABOUT}</p>
        </div>
      </div>
    );
  }
}
