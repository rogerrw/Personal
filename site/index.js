import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './containers/Intro';
import Footer from './containers/Footer';

require('./styles/Base.scss');

ReactDOM.render(<Intro />, document.getElementById('main'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
