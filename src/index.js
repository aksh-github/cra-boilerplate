import React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router } from 'react-router-dom';

//import $ from 'jquery';
//import 'popper.js';
import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import 'styles/index.css';

(()=>
{
	render(<Router>
		<App />
		</Router>, document.getElementById('root'));

	registerServiceWorker();

})();
