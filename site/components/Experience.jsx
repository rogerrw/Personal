import PropTypes from 'prop-types';
import React from 'react';

export default class Experience extends React.Component {
  render() {
    return (
      <div className="experience-item">
        <img src={this.props.imageSrc} />
        <h3 className="experience-title">
          {this.props.title}
        </h3>
        <p className="experience-description">
          {this.props.description}
        </p>
      </div>
    );
  }
}

Experience.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
