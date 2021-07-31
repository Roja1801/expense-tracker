import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from './context/context'
import {SpeechProvider} from '@speechly/react-client';

ReactDom.render(
    <SpeechProvider appId="b1127eb7-5067-4393-a3c5-38eee69588c1" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,

document.getElementById('root'));