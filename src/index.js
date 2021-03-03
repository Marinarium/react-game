import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/app/app";

document.addEventListener('keydown', function (event) {
    if (event.key === 'h' && event.altKey) {
        window.location = '/';
    }
    if (event.key === 's' && event.altKey) {
        window.location = '/settings';
    }
    if (event.key === 't' && event.altKey) {
        window.location = '/statistic';
    }
    if (event.key === 'k' && event.altKey) {
        window.location = '/hotkeys';
    }
    if (event.key === 'g' && event.altKey) {
        window.location = '/game';
    }
});

ReactDOM.render(<App/>, document.getElementById('root'));