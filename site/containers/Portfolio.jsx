import React from 'react';
import Experience from '../components/Experience';
require('../styles/Portfolio.scss');

const text = require('../text');

export default class Portfolio extends React.Component {
  render() {
    return (
      <div id="portfolio">
        <Experience
            imageSrc="/images/ieas_logo.png"
            title={text.IEAS_TITLE}
            description={text.IEAS_DESCRIPTION}
            skills={text.IEAS_SKILLS}
        />
      </div>
    );
  }
}
