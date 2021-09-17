import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalTheme = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #FFB6C1;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalTheme />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
