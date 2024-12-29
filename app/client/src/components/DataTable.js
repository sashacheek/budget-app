import React from "react";

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
                        return (
                    <tr key={key}>
                                <td>{val.date}</td>
                                <td>{val.amount}</td>
                                <td>{val.category}</td>
                                <td><a>edit</a></td>
                                <td onClick={() => deleteEntry(key)}>del</td>
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