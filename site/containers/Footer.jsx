import React from 'react';
require('../styles/Footer.scss');

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <a target='_blank' href='https://www.linkedin.com/in/roger-wang/'>
          <img src='../../images/linkedin_logo.png' />
        </a>
        <a target='_blank' href='https://stackoverflow.com/users/2502953/rogerwang'>
          <img src='../../images/stackoverflow_logo.png' />
        </a>
        <a target='_blank' href='https://github.com/rogerrw'>
          <img src='../../images/github_logo.png' />
        </a>
      </div>
    );
  }
}
