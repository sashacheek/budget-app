import React from 'react';
import DataTable from '../components/DataTable';
import { Link } from "react-router-dom"

function EditEntries() {
    return (
        <div className="content-container">
            <h1>Edit Page</h1>
            <DataTable />
            <Link to="/data" className="button-style button-small">&larr; go back</Link>
        </div>
    )
}

export default EditEntries;