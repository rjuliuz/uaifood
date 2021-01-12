import React from "react";
import Router from "./routes/Router";
import GlobalState from "./global/GlobalState";
import './App.css';

const App = () => {
  return (
    <GlobalState>
      <Router/>
    </GlobalState>
    
  );
};

export default App;
