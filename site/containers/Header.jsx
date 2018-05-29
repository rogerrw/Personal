import React from 'react';
require('../styles/Header.scss')

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div id="nav">
          <a href="#skills">Skills</a>
          <a href="#portfolio">Portfolio</a>
        </div>
        <h1>Roger Wang</h1>
        <div id="resume-download">
          <a target="_blank" href="/resume.pdf">Resume</a>
        </div>
      </div>
    );
  }
}
