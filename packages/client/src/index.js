import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.css'

import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'
import Root from './modules/root/components/Root'

const store = configureStore()

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
