require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import {Provider} from 'react-redux';

import Test from './components/test';
import RandomPersonDisplay from './components/views/RandomPersonDisplay';

import store from './redux/store';

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
    <Provider store={store}>
		<RandomPersonDisplay />
	</Provider>,
	document.getElementById('app')
	);
});

