import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import configureStore from "./redux/configureStore";
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
  const store=configureStore()
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ChakraProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ChakraProvider>

    </Provider>
   

 
  </React.StrictMode>
);


