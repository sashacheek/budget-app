import React from "react";
import PieWeek from "../charts/PieWeek";
import PieMonth from "../charts/PieMonth";
import { Link } from "react-router-dom";

function Data() {
return (
    <div className="content-container">
        <h1>Data page</h1>
        <PieWeek />
        <PieMonth />
        <Link to="/edit" className="button-style button-small">Edit Data</Link>
        <Link to="/" className="button-style button-small">&larr; go back</Link>
    </ div>
)
}

export default Data;