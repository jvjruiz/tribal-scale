require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, HashHistory } from 'react-router';
import {Provider} from 'react-redux';

import RandomPersonDisplay from './components/views/RandomPersonDisplay';
import Modal from './components/views/Modal';
import store from './redux/store';

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
    <Provider store={store}>
		<div>
			<RandomPersonDisplay />
			<Modal />
		</div>
	</Provider>,
	document.getElementById('app')
	);
});

