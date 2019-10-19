import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import publications from './bd/publications.json';

ReactDOM.render(<App items={publications} />, document.querySelector('#root'));
