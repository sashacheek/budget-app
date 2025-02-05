import React from 'react';
import DataTable from '../components/DataTable';
import { Link } from "react-router-dom"

function EditEntries() {
    return (
        <div className="content-container vertical-stretch">
            <div className="two-buttons sticky-menu">
                <Link className="button-style button-small" to="/edit">list</Link>
                <Link className="button-style button-small" to="/data">graphs</Link>
            </div>
            {/* <h1>Edit Page</h1> */}
            <DataTable />
            <Link to="/data" className="button-style button-small">graphs</Link>
            <Link to="/" className="button-style button-small">&larr; go back</Link>
        </div>
    )
}

export default EditEntries;