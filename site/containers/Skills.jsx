import React from 'react';
import PropTypes from 'prop-types';
require('../styles/Skills.scss');

const text = require('../text');

export default class Skills extends React.Component {
  render() {
    return (
      <div id="skills">
        <h2 className="section-title">Knowledge & Expertise</h2>
        <div id="skills-lists">
          <div>
            <h4>Programming Languages</h4>
            <ul id="programming-languages">
              {this.renderSkillsList(text.PROGRAMMING_LANGUAGES)}
            </ul>
          </div>

          <div>
            <h4>Frameworks</h4>
            <ul id="frameworks">
              {this.renderSkillsList(text.FRAMEWORKS)}
            </ul>
          </div>

          <div>
            <h4>Backend</h4>
            <ul id="backend">
              {this.renderSkillsList(text.BACKEND)}
            </ul>
          </div>

          <div>
            <h4>Tools</h4>
            <ul id="tools">
              {this.renderSkillsList(text.TOOLS)}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  renderSkillsList(skills) {
    if (!skills) {
      return;
    }

    const skillsList = [];

    skills.forEach((skill, index) => {
      skillsList.push((
        <li className="skill" key={index}>
          {skill}
        </li>
      ));
    });

    return skillsList;
  }
}

Skills.propTypes = {
  frameworks: PropTypes.arrayOf(PropTypes.string),
  backEnd: PropTypes.arrayOf(PropTypes.string),
  programmingLanguages: PropTypes.arrayOf(PropTypes.string),
}
