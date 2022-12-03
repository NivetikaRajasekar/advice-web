import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

//render(element we want to render, the element we want to hook onto)
//root which is in index.html where everything converges

ReactDOM.render(
    <App />,
    document.getElementById('root')
);