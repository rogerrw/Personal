import React from 'react';
import Experience from '../components/Experience';
import Project from '../components/Project';
require('../styles/Portfolio.scss');

const text = require('../text');

export default class Portfolio extends React.Component {
  render() {
    return (
      <div id="portfolio">
        <h2 className="section-title">-Portfolio-</h2>

        <Experience
            imageSrc="/images/pitt_logo.png"
            title={text.DBMI_TITLE}
            organization={text.DBMI_ORGANIZATION}
            description={text.DBMI_DESCRIPTION}
            skills={text.DBMI_SKILLS}
            location={text.DBMI_LOCATION}
            startDate={text.DBMI_START_DATE}
            endDate={text.DBMI_END_DATE}
            link={text.DBMI_LINK}
        />

        <Experience
            imageSrc="/images/moovweb_logo.png"
            title={text.MOOVWEB_TITLE}
            organization={text.MOOVWEB_ORGANIZATION}
            description={text.MOOVWEB_DESCRIPTION}
            skills={text.MOOVWEB_SKILLS}
            location={text.MOOVWEB_LOCATION}
            startDate={text.MOOVWEB_START_DATE}
            endDate={text.MOOVWEB_END_DATE}
            link={text.MOOVWEB_LINK}
        />

        <Experience
            imageSrc="/images/ieas_logo.png"
            title={text.IEAS_TITLE}
            organization={text.IEAS_ORGANIZATION}
            description={text.IEAS_DESCRIPTION}
            skills={text.IEAS_SKILLS}
            location={text.IEAS_LOCATION}
            startDate={text.IEAS_START_DATE}
            endDate={text.IEAS_END_DATE}
            link={text.IEAS_LINK}
        />

        <Experience
            imageSrc="/images/sap_logo.png"
            title={text.SAP_TITLE}
            organization={text.SAP_ORGANIZATION}
            description={text.SAP_DESCRIPTION}
            skills={text.SAP_SKILLS}
            location={text.SAP_LOCATION}
            startDate={text.SAP_START_DATE}
            endDate={text.SAP_END_DATE}
            link={text.SAP_LINK}
        />

        <h3 className="section-title">-Other Projects-</h3>

        <Project
            name={text.PERSONAL_NAME}
            description={text.PERSONAL_DESCRIPTION}
            skills={text.PERSONAL_SKILLS}
        />
      </div>
    );
  }
}
