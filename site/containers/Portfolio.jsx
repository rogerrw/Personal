import React from 'react';
import Experience from '../components/Experience';
require('../styles/Portfolio.scss');

export default class Intro extends React.Component {
  render() {
    return (
      <div id="portfolio">
        <Experience
            imageSrc="/images/ieas_logo.png"
            title="Web Developer for the Institute of East Asian Studies @ UC Berkeley"
            description=""
        />
      </div>
    );
  }
}
