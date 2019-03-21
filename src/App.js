import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeContainer from './containers/Home';
import './App.css';

export function AppRouter() {
  return (
    <Router>
        <Route path="/" exact component={HomeContainer} />
    </Router>
  );
}

export default AppRouter;