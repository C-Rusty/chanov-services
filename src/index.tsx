import React from 'react';
import ReactDOM from 'react-dom/client';
import {I18nextProvider} from "react-i18next";
import i18next from 'i18next';
import App from './components/App';

i18next.init({
    interpolation: {escapeValue: false}
});

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </React.StrictMode>,
);