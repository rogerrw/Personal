import ProfilePic from '../images/ProfileBW-circle.png';
import GithubLogo from '../images/github_logo.png'
import IeasLogo from '../images/ieas_logo.png'
import LinkedinLogo from '../images/linkedin_logo.png'
import MoovwebLogo from '../images/moovweb_logo.png'
import NapdiLogo from '../images/napdi_logo.png'
import PittLogo from '../images/pitt_logo.png'
import SapLogo from '../images/sap_logo.png'
import StackoverflowLogo from '../images/stackoverflow_logo.png'


module.exports = Object.freeze({
  WELCOME: 'Hey! Roger here. Thanks for visiting.',
  WELCOME_PIC: ProfilePic,

  INTRO: `I’m a front-end developer living in Pittsburgh, PA. Currently I work for the University of Pittsburgh’s Department of Biomedical Informatics.`,

  CONTACT: `Let's Talk`,

  ABOUT: `I am a front-end web developer specialized in Javascript programming, with 4 years of professional experience. I graduated from UC Berkeley back in 2015, with a B.A. in Computer Science. Currently, I work for the Department of Biomedical Informatics at the University of Pittsburgh, managing a host of different sites and web applications.`,

  // Skills
  FRAMEWORKS: ['React.js', 'jQuery', 'Node.js', 'Express.js', 'Sails.js', 'D3.js', 'Sequelize.js'],
  PROGRAMMING_LANGUAGES: ['Javascript', 'Java', 'Python', 'SQL', 'HTML', 'CSS/SCSS'],
  BACKEND: ['PostgreSQL', 'MongoDB', 'Apache'],
  TOOLS: ['Git', 'Docker', 'Browser Tools', 'WordPress'],

  // Experience
  DBMI_TITLE: 'Front End Web Developer',
  DBMI_ORGANIZATION: 'Department of Biomedical Informatics @ University of Pittsburgh',
  DBMI_DESCRIPTION: 'I currently manage and maintain 12 websites belonging to the Department, while developing new features for more intensive web applications for medical research.',
  DBMI_SKILLS: ['SASS', 'Node.js', 'Sails.js', 'Docker', 'Wordpress', 'Drupal'],
  DBMI_START_DATE: 'October, 2017',
  DBMI_END_DATE: 'Present',
  DBMI_LOCATION: 'Pittsburgh, PA',
  DBMI_LINK: 'http://repo.napdi.org/',
  DBMI_LOGO: PittLogo,

  MOOVWEB_TITLE: 'Front End Developer',
  MOOVWEB_ORGANIZATION: 'Moovweb',
  MOOVWEB_DESCRIPTION: `Moovweb is a PaaS that provides clean and effective mobile browser solutions for e-commerce and financial industry leaders. I developed and maintained mobile-friendly user interfaces for several of Moovweb's big-name clients. Eight months later, I transitioned to work on a new product (MoovCheckout) as a front-end engineer...`,
  MOOVWEB_SKILLS: ['Javascript', 'SASS', 'React.js', 'jQuery', 'Mocha.js'],
  MOOVWEB_START_DATE: 'July, 2015',
  MOOVWEB_END_DATE: 'July, 2017',
  MOOVWEB_LOCATION: 'San Francisco, CA',
  MOOVWEB_LINK: 'https://www.moovweb.com/',
  MOOVWEB_LOGO: MoovwebLogo,

  IEAS_TITLE: 'Part Time Web Developer',
  IEAS_ORGANIZATION: 'Institute of East Asian Studies @ UC Berkeley',
  IEAS_DESCRIPTION: 'I worked part time for IEAS during my final semester of college to implement a major redesign of their main page as well as 8 subdomains.',
  IEAS_SKILLS: ['HTML', 'CSS', 'DreamWeaver'],
  IEAS_START_DATE: 'March, 2015',
  IEAS_END_DATE: 'May, 2015',
  IEAS_LOCATION: 'Berkeley, CA',
  IEAS_LINK: 'http://ieas.berkeley.edu/',
  IEAS_LOGO: IeasLogo,

  SAP_TITLE: 'Software Engineer Intern',
  SAP_ORGANIZATION: 'SAP',
  SAP_DESCRIPTION: `I worked as an intern on the ESP (Event Stream Processor) Studio team for SAP. During the internship, I fixed several bugs on the product, and developed a new menu design allowing users to import custom stream processing code for complex data manipulation. I also wrote new CLI scripts to manage user permissions in ESP.`,
  SAP_SKILLS: ['Java', 'JUnit', 'Unix'],
  SAP_START_DATE: 'May, 2014',
  SAP_END_DATE: 'August, 2014',
  SAP_LOCATION: 'Dublin, CA',
  SAP_LINK: 'https://wiki.scn.sap.com/wiki/display/SYBESP/Event+Stream+Processor',
  SAP_LOGO: SapLogo,


  // Side Projects
  MEMORIZE_NAME: '(Upcoming) Memorize',
  MEMORIZE_DESCRIPTION: `A new idea for a web tool to help people interactively memorize Bible verses. Stay tuned. I'm currently building this in my off-time with a friend.`,
  MEMORIZE_SKILLS: ['React.js', 'MongoDB', 'SASS', 'Node.js', 'Express.js'],

  PERSONAL_NAME: 'Personal Website',
  PERSONAL_DESCRIPTION: `You're looking at it. I know, I know, React is overkill for this, but I also think of it as my little playground for CSS animations, responsive design, and other fun things.`,
  PERSONAL_SKILLS: ['React.js', 'Javascript', 'HTML', 'SASS', 'Webpack'],

  CALAPPS_NAME: 'Cal Apps',
  CALAPPS_DESCRIPTION: `This was a CS169 (software engineering) project, where I and a team of four other students partnered up with the UC Berkeley IT department. The idea was rather silly: a portal where students could go to find other students' work, and showcase their own. The project was passed off to others in the department after we built our first two working iterations.`,
  CALAPPS_SKILLS: ['Ruby', 'Rails', 'SASS', 'SQLite'],


  FOOTER_LINKEDIN: LinkedinLogo,
  FOOTER_STACKOVERFLOW: StackoverflowLogo,
  FOOTER_GITHUB: GithubLogo,
});
