import '../index.css';
import axios from 'axios';
import React from 'react';
import NewEntry from './NewEntry';
import Home from './Home'
import Data from './Data';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/entry" element={<NewEntry />} />
            <Route path="/data" element={<Data />} />
          </Routes>
        </Router>
  );
}

export default App;