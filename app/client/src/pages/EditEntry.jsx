import React from "react";
import { useLocation, Link } from 'react-router-dom';

function EditEntry() {
    // router location
    const location = useLocation();
    const { key } = location.state;
    
    // get data
    const data = JSON.parse(localStorage.getItem("spendingData"))
    const keyData = data[key];

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


    // on date change
    function changeDate(event) {
        setDate(event.target.value);
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
        localStorage.setItem("spendingData", JSON.stringify(newData));
    }

    return (
        <div className="content-container">
            <h1>Edit Entry Page</h1>
            <form className="form-container">
                <input type="date" value={date} onChange={changeDate}></input>
                <button type="button" onClick={submitData} className="button-style">Submit</button>
                <Link to="/edit" className="button-style">&larr; go back</Link>
            </form>
        </div>
    )
}

export default EditEntry;