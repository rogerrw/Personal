import React from 'react';
import Experience from '../components/Experience';
require('../styles/Portfolio.scss');

const text = require('../text');

export default class Portfolio extends React.Component {
  render() {
    return (
      <div id="portfolio">
        <h3 className="section-title">Experience</h3>
        <Experience
            imageSrc="/images/ieas_logo.png"
            title={text.IEAS_TITLE}
            organization={text.IEAS_ORGANIZATION}
            description={text.IEAS_DESCRIPTION}
            skills={text.IEAS_SKILLS}
            startDate={text.IEAS_START_DATE}
            endDate={text.IEAS_END_DATE}
            link={text.IEAS_LINK}
        />

        <Experience
            imageSrc="/images/moovweb_logo.png"
            title={text.MOOVWEB_TITLE}
            organization={text.MOOVWEB_ORGANIZATION}
            description={text.MOOVWEB_DESCRIPTION}
            skills={text.MOOVWEB_SKILLS}
            startDate={text.MOOVWEB_START_DATE}
            endDate={text.MOOVWEB_END_DATE}
            link={text.MOOVWEB_LINK}
        />
      </div>
    );
  }
}
