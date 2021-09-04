import React from 'react';
import ReactDOM from 'react-dom';
import MessagesContextProvider from './context/MessagesContext';
import Home from './pages/Home/Home';

const NewApp = require('./pages/Home/Home.jsx').default;

function renderApp(App) {
  ReactDOM.render(
    <MessagesContextProvider>
      <App />
    </MessagesContextProvider>,
    document.getElementById('root'),
  );
}

renderApp(Home);

// if (module.hot) {
//   module.hot.accept('./pages/Home/Home.jsx', () => {
//     renderApp(NewApp);
//   });
// }
