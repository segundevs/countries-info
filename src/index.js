import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import CountriesContextProvider from './contexts/CountriesContext';
import { ChakraProvider } from "@chakra-ui/react";
import  theme  from './utils/theme';
import { ColorModeScript } from "@chakra-ui/react";


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CountriesContextProvider>
        <Router>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </Router>
      </CountriesContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);