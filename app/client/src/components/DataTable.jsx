import React from "react";
import { Link } from "react-router-dom";

const DataTable = () => {
    let [data, setData] = React.useState(JSON.parse(localStorage.getItem("spendingData")));

    const deleteEntry = (key) => {
        console.log(data[key]);
        let tempData = data.toSpliced(key, 1);
        localStorage.setItem("spendingData", JSON.stringify(tempData));
        setData(tempData);
        alert("Deleted Item");
    }

    return (
        <div className="table-container">
        <table className="table-style">
            <thead>
                <tr>
                    <td>DATE</td>
                    <td>AMOUNT</td>
                    <td>CATEGORY</td>
                    <td>EDIT</td>
                    <td>DEL</td>
                </tr>
            </thead>
            <tbody>
                {data.map((val, key) => {
                    if (val.amount && val.category) {
                        const date1 = new Date(val.date);
                        const date2 = date1.toDateString();
                        return (
                    <tr key={key}>
                                <td>{date2}</td>
                                <td>{val.amount}</td>
                                <td>{val.category}</td>
                                <td><Link to="/editentry" state={{ key: key }}>edit</Link></td>
                                <td><Link to="/delete" state={{ key: key }}>del</Link></td>
                            </tr>
                        )
                    }
                })}
            </tbody>
        </table>
        </div>
    )
}

export default DataTable;