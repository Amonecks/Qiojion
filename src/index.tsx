import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/showcase/App/App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.tsx';

import './styles/styles.scss';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>

    <Provider store={store}>

      <App />

    </Provider>

  </BrowserRouter>
)
