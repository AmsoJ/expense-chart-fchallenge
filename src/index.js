import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './assets/globalHook/globalHook';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <AppProvider>
        <App />
    </AppProvider>
);