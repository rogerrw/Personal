import React from 'react';

require('../styles/Intro.scss');

export default class Intro extends React.Component {
  render() {
    return (
      <div id="intro">
        <div id="intro-content">
          <div id="profile-pic">
            <img src="/images/ProfileBW-circle.png" />
          </div>
          <div id="welcome-text">
            <p>Hey! Roger here. Thanks for visiting!</p>
            <p>I’m a front-end developer living in Pittsburgh, PA. Currently I work for the University of Pittsburgh’s Department of Biomedical Informatics.</p>
          </div>
        </div>
      </div>
    );
  }
}
