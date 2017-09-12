import React from 'react';
require('../styles/Footer.scss');

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <a href='https://www.flickr.com/photos/146308544@N05/'>
          <img src="/images/flickr_logo.png" alt="" />
        </a>
      </div>
    );
  }
}
