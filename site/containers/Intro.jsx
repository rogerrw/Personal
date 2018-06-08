import React from 'react';
const text = require('../text');

export default class Intro extends React.Component {
  render() {
    return (
      <div id="intro">
        <div id="intro-content">
          <div id="profile-pic">
            <img src={text.WELCOME_PIC} />
          </div>
          <div id="welcome-text">
            <p>{text.WELCOME}</p>
            <p>{text.INTRO}</p>
            <div id="contact">
              <a href="mailto:roger.wang.r@gmail.com">{text.CONTACT}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
