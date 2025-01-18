import React from "react";
import { useLocation, Link, useNavigate } from 'react-router-dom';

function EditEntry() {
    // router location
    const location = useLocation();
    const navigate = useNavigate();
    const { key } = location.state;
    
    // get data
    const data = JSON.parse(localStorage.getItem("spendingData"))
    const keyData = data[key];
    const dataAmount = keyData.amount;
    const dataCategory = keyData.category;

    // format/set date
    const dataDate = new Date(keyData.date);
    var month = dataDate.getMonth() + 1;
    month = month.toString();
    month = month.padStart(2, "0");
    var day = dataDate.getDate();
    day = day.toString();
    day = day.padStart(2, "0");
    const year = dataDate.getFullYear();
    const formattedDate = `${year}-${month}-${day}`

    console.log(dataDate);
    console.log(formattedDate);

    const [date, setDate] = React.useState(formattedDate);
    const [amount, setAmount] = React.useState(dataAmount);
    const [category, setCategory] = React.useState(dataCategory);


    // on date change
    function changeDate(event) {
        setDate(event.target.value);
    }

    // on amount change
    function changeAmount(event) {
        setAmount(event.target.value);
    }

    // on category change
    function changeCategory(event) {
        setCategory(event.target.value);
    }

    // make sure set date retains original hour and minute values to account for timezone discrepencies
    function submitData() {
        var hour = dataDate.getHours();
        hour = hour.toString();
        hour = day.padStart(2, "0");
        var minute = dataDate.getMinutes();
        minute = minute.toString();
        minute = minute.padStart(2, "0");
        const reformattedDate = `${date}T${hour}:${minute}:00`;
        console.log(reformattedDate);

        const dateFormat = new Date(reformattedDate);

        let newData = data;
        newData[key].date = dateFormat;
        newData[key].amount = amount;
        newData[key].category = category;
        localStorage.setItem("spendingData", JSON.stringify(newData));
        navigate("/edit");
    }

    return (
        <div className="content-container">
            <h1>Edit Entry Page</h1>
            <form className="form-container">
                <div>
                    <label for="date">Date:</label>
                    <input id="date" type="date" value={date} onChange={changeDate}></input>
                </div>
                <div>
                    <label for="amount">Amount:</label>
                    <input id="amount" type="number" value={amount} onChange={changeAmount}></input>
                </div>
                <div>
                    <label for="category">Category:</label>
                    <div className="select-style">
                        <select id="category" name="category" value={category} onChange={changeCategory}>
                            <option>Category</option>
                            <option>Groceries</option>
                            <option>Rent</option>
                            <option>Bills</option>
                        </select>
                    </div>
                </div>
                <button type="button" onClick={submitData} className="button-style">Submit</button>
                <Link to="/edit" className="button-style">&larr; go back</Link>
            </form>
        </div>
    )
}

export default EditEntry;