import React from 'react';
import ReactDOM from 'react-dom';
import About from './containers/About';
import Intro from './containers/Intro';
import Portfolio from './containers/Portfolio';
import Footer from './containers/Footer';

require('./styles/Base.scss');

ReactDOM.render(<Intro />, document.getElementById('intro-container'));
ReactDOM.render(<About />, document.getElementById('about-container'));
ReactDOM.render(<Portfolio />, document.getElementById('portfolio-container'));
ReactDOM.render(<Footer />, document.getElementById('footer-container'));
