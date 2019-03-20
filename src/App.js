import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeContainer from './containers/Home';
import './App.css';

function AppRouter() {
  return (
    <Router>
        <Route path="/" exact component={HomeContainer} />
        {/* <Route path="/show/:id" component={Detail} /> */}
    </Router>
  );
}

export default AppRouter;