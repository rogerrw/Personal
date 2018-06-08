import PropTypes from 'prop-types';
import React from 'react';

export default class Tags extends React.Component {
  constructor(props ) {
    super(props);

    this.renderTagList = this.renderTagList.bind(this);
  }

  renderTagList() {
    const tagList = [];
    this.props.textArray.forEach((string, index) => {
      tagList.push(
        <span key={index} className="tag">{string} </span>
      );
    });
    return tagList;
  };

  render() {
    return (
      <div className="tags">
        {this.renderTagList()}
      </div>
    );
  }
}

Tags.propTypes = {
  textArray: PropTypes.arrayOf(PropTypes.string)
};
