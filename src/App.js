import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => (
  <Router>
    <Route path="/" element={<Greeting />}></Route>
  </Router>
);

export default App;
