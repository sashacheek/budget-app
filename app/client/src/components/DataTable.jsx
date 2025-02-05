import React from "react";
import { Link } from "react-router-dom";

const DataTable = () => {
    let [data, setData] = React.useState(JSON.parse(localStorage.getItem("spendingData")).sort((a, b) => new Date(b.date) - new Date(a.date)));

    return (
        <div className="data-container">
                {data.map((val, key) => {
                    console.log(key);
                    if (val.amount && val.category) {
                        const date1 = new Date(val.date);
                        const date2 = date1.toDateString();
                        return (
                    <Link className="row" key={key} to="/editentry" state={{ key: data.length - key - 1}}>
                        <div className="row-left">
                            <p>{val.category.toUpperCase()}</p>
                            <p>{date2}</p>
                        </div>
                        <div className="row-right">
                            <p>${val.amount}</p>
                        </div>
                        </Link>
                        )
                    }
                })}
            
        </div>
    )
}

export default DataTable;