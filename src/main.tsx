import React             from 'react';
import ReactDOM          from 'react-dom/client';
import { App }           from './app/App.tsx';
import { Provider }      from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store }         from './store.ts';

ReactDOM.createRoot( document.getElementById( 'root' ) as HTMLElement ).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={ store }>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
