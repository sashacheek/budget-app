import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

function Delete() {
    // router location
    const location = useLocation();
    const navigate = useNavigate();
    const { key } = location.state;
    
    // get data
    const data = JSON.parse(localStorage.getItem("spendingData"))
    const keyData = data[key];

    // format date
    const date1 = new Date(keyData.date);
    const date2 = date1.toDateString();

    function deleteData() {;
        data.splice(key, 1);
        localStorage.setItem("spendingData", JSON.stringify(data));
        navigate("/edit");
    }

    return (
        <div className="content-container">
            <h1>Delete page</h1>
            <p>Are you sure you want to delete the following data?</p>
            <table className="table-style">
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <td>Date:</td>
                        <td>{date2}</td>
                    </tr>
                    <tr>
                        <td>Category:</td>
                        <td>{keyData.category}</td>
                    </tr>
                    <tr>
                        <td>Amount:</td>
                        <td>{keyData.amount}</td>
                    </tr>
                </tbody>
            </table>
            <button type="button" onClick={deleteData} className="button-style">Delete</button>
            <Link to="/edit" className="button-style">Cancel</Link>
        </div>
    );
}

export default Delete;