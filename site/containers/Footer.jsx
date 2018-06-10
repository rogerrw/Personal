import React from 'react';
const text = require('../text');

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <div id='contact-button'>
          <a href="mailto:roger.wang.r@gmail.com">Get in contact</a>
        </div>
        <a target='_blank' href='https://www.linkedin.com/in/roger-wang/'>
          <img src={text.FOOTER_LINKEDIN} />
        </a>
      </div>
    );
  }
}
