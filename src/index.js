import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import { AppRedux } from 'containers/AppContainer'

import { Provider } from 'react-redux';
import { store } from './store';

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRedux />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);