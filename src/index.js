import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import AppProducts from './components/AppProducts';

ReactDOM.render(<AppProducts />, document.getElementById('root'));
registerServiceWorker();
