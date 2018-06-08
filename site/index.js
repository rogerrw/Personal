import React from 'react';
import ReactDOM from 'react-dom';
import About from './containers/About';
import Intro from './containers/Intro';
import Header from './containers/Header';
import Skills from './containers/Skills';
import Portfolio from './containers/Portfolio';
import Footer from './containers/Footer';

require('./styles/Main.scss');

ReactDOM.render(<Header />, document.getElementById('header-container'));
ReactDOM.render(<Intro />, document.getElementById('intro-container'));
ReactDOM.render(<About />, document.getElementById('about-container'));
ReactDOM.render(<Skills />, document.getElementById('skills-container'));
ReactDOM.render(<Portfolio />, document.getElementById('portfolio-container'));
ReactDOM.render(<Footer />, document.getElementById('footer-container'));
