import PropTypes from 'prop-types';
import React from 'react';
import Tags from './Tags';

export default class Project extends React.Component {
  constructor(props ) {
    super(props);
    this.getDateText = this.getDateText.bind(this);
  }

  render() {
    let leftSection;
    if (this.props.imageSrc) {
      leftSection = (
          <div className="project-left-section">
            <img className="project-logo" src={this.props.imageSrc} />
          </div>
        );
    }

    return (
      <div className="project-item">
        {leftSection}

        <div className="project-right-section">
          <h3 className="project-name">
            {this.props.name}
          </h3>
          <p className="project-description">
            {this.props.description}
          </p>
          <div className="project-link">
            <a target="_blank" href={this.props.link}>{this.props.link}</a>
          </div>
          <div className="project-skills">
            <Tags textArray={this.props.skills} />
          </div>
        </div>
      </div>
    );
  }

  getDateText() {
    return `${this.props.startDate} - ${this.props.endDate}`;
  }
}

Project.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),

  link: PropTypes.string
};
