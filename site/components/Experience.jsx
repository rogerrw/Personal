import PropTypes from 'prop-types';
import React from 'react';

export default class Experience extends React.Component {
  constructor(props ) {
    super(props);
    this.renderSkills = this.renderSkills.bind(this);
    this.getDateText = this.getDateText.bind(this);
  }

  render() {
    const skillsSection = this.renderSkills();

    return (
      <div className="experience-item">
        <div className="experience-left-section">
          <img className="experience-logo" src={this.props.imageSrc} />
        </div>

        <div className="experience-right-section">
          <h3 className="experience-title">
            {this.props.title}
          </h3>
          <p className="experience-organization">
            {this.props.organization}
          </p>
          <div className = "experience-details">
            <span className="experience-location">
              {this.props.location}
            </span>
            <span className="experience-dates">
              {this.getDateText()}
            </span>
          </div>
          <p className="experience-description">
            {this.props.description}
          </p>
          <div className="experience-link">
            <a target="_blank" href={this.props.link}>{this.props.link}</a>
          </div>
          <div className="experience-skills">
            {skillsSection}
          </div>
        </div>
      </div>
    );
  }

  renderSkills() {
    const skillTags = [];
    this.props.skills.forEach((skill, index) => {
      skillTags.push((
        <span className="skill-tag" key={index}>{skill}</span>
      ));
    });
    return skillTags;
  };

  getDateText() {
    return `${this.props.startDate} - ${this.props.endDate}`;
  }
}

Experience.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  organization: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),

  startDate: PropTypes.string,
  endDate: PropTypes.string,
  location: PropTypes.string,
  link: PropTypes.string
};
