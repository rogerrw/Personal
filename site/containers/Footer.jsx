import React from 'react';
const text = require('../text');

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <a target='_blank' href='https://www.linkedin.com/in/roger-wang/'>
          <img src={text.FOOTER_LINKEDIN} />
        </a>
        <a target='_blank' href='https://stackoverflow.com/users/2502953/rogerwang'>
          <img src={text.FOOTER_STACKOVERFLOW} />
        </a>
        <a target='_blank' href='https://github.com/rogerrw'>
          <img src={text.FOOTER_GITHUB} />
        </a>
      </div>
    );
  }
}
