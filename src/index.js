import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppContainer from './AppContainer';

ReactDOM.render(<AppContainer />, document.getElementById('root'));

serviceWorker.unregister();
