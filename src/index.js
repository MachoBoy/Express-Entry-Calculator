import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import reducers from './reducers';
import App from './components/App';

const store = createStore(reducers);
const rootElement = document.getElementById('root');
const render = Component => {
    ReactDOM.render(
      <AppContainer>
        <HashRouter>
          <Provider store={store}>
            <Component />
          </Provider>
        </HashRouter>
      </AppContainer>,
     rootElement,
    );
  };

  render(App);
  
  if (module.hot) {
    module.hot.accept('./components/App', () => {
      const NextApp = require('./components/App');
      render(NextApp);
    });
  }
