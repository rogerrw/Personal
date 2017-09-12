import React from 'react';

require('../styles/Intro.scss');

export default class Intro extends React.Component {
  render() {
    return (
      <div id="intro">
        <div id="intro-background">
          <img src="/images/ProfileColor.jpg" />
        </div>
        <h1 id="intro-text">Hey! My name is Roger Wang</h1>
      </div>
    );
  }
}
