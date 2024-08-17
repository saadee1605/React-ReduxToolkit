import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { } from '@reduxjs/toolkit/query/react';
import { Provider } from 'react-redux';
import store from './ReduxStore/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
     <Provider store={store}> {/* //wrap the full app in the store  */}
      <App />
    </Provider>

  </>);
reportWebVitals();
