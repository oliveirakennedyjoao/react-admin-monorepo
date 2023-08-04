import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/app';

// import './theme/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import { StrictMode } from 'react';
// // import { BrowserRouter } from 'react-router-dom';
// import ReactDOM from 'react-dom/client';

// import App from './app/app';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

// root.render(
//   <StrictMode>
//     {/* <BrowserRouter> */}
//     <App />
//     {/* </BrowserRouter> */}
//   </StrictMode>
// );
