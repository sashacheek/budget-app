import React from "react";
import PieWeek from "../charts/PieWeek";
import PieMonth from "../charts/PieMonth";
import { Link } from "react-router-dom";
import DataMenu from '../components/DataMenu';

function Data() {
return (
    <div className="content-container vertical-stretch">
        <DataMenu />
        <PieWeek />
        <PieMonth />
        <div>
            {/* <Link to="/edit" className="button-style button-small">Edit Data</Link> */}
            <Link to="/edit" className="button-style button-small">&larr; go back</Link>
        </div>
    </ div>
)
}

export default Data;