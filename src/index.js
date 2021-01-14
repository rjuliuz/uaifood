import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FilterProvider } from './context/GlobalFilterData'
import { RequestProvider } from './context/GlobalStateCities'

ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
      <RequestProvider>    
        <App />
      </RequestProvider>
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);