import logo from '../piechart.png';
import '../index.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
<div id="home">
    <div className="content-container">
        <img src={logo} className="logo"></img>
        <Link className="button-style" to="/entry">Add Entry</Link>
        <Link className="button-style" to="/edit">View Data</Link>
    </div>
</div>
);
};

export default Home;