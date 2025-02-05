import React from 'react';
import DataTable from '../components/DataTable';
import DataMenu from '../components/DataMenu';
import { Link } from "react-router-dom";

function EditEntries() {
    return (
        <div className="content-container vertical-stretch">
            <DataMenu />
            <DataTable />
        </div>
    )
}

export default EditEntries;