import PropTypes from 'prop-types';
import React from 'react';

export default class Experience extends React.Component {
  constructor(props ) {
    super(props);
    this.renderSkills = this.renderSkills.bind(this);
  }

  render() {
    const skillsSection = this.renderSkills();

    return (
      <div className="experience-item">
        <img src={this.props.imageSrc} />
        <h3 className="experience-title">
        </h3>
        <p className="experience-description">
          {this.props.description}
        </p>
        {skillsSection}
      </div>
    );
  }

  renderSkills() {
    const skillTags = [];
    this.props.skills.forEach((skill, index) => {
      skillTags.push((
        <div className="skill-tag" key={index}>
          <span>{skill}</span>
        </div>
      ));
    });
    return skillTags;
  };
}

Experience.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),
};
