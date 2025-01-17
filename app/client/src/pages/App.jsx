import '../index.css';
import axios from 'axios';
import React from 'react';
import NewEntry from './NewEntry';
import Home from './Home'
import Data from './Data';
import EditEntries from './EditEntries'
import EditEntry from './EditEntry';
import Delete from './Delete';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

function App() {

  return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/entry" element={<NewEntry />} />
            <Route path="/data" element={<Data />} />
            <Route path="/edit" element={<EditEntries />} />
            <Route path="/editentry" element={<EditEntry />} />
            <Route path="/delete" element={<Delete />} />
          </Routes>
        </Router>
  );
}

export default App;