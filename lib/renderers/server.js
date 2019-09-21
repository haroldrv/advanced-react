import React from 'react';
import ReactDOMSserver from 'react-dom/server';

import App from '../components/app';

function server() {
  return ReactDOMSserver.renderToString(<App />);
}

export default server;