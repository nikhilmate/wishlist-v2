import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import AppProvider from './store/Store';

import './styles/index.css';

const App = (
    <AppProvider>
        <Main />
    </AppProvider>
);

ReactDOM.render(App, document.getElementById('root'));
