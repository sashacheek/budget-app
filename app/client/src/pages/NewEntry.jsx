import '../index.css';
import { Link } from "react-router-dom";
import axios from "axios"
import { useState } from "react";


function NewEntry() {

    const [formData, setFormData] = useState({
        amount: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let curDate = new Date();
            let amount = formData.amount;
            let category = formData.category;

            let newData = {date: curDate, amount: amount, category: category};
            let existingData = JSON.parse(localStorage.getItem("spendingData")) || [];
            existingData.push(newData)
            localStorage.setItem("spendingData", JSON.stringify(existingData));

            alert("New entry added");
        } catch (error) {
            console.error("Error:", error.message);
        }
    }

return (
<div id="entry" className="content-container">
    <h1>New Entry</h1>
    <form className="form-container" id="new-entry" method="post" onSubmit={handleSubmit}>
        <input placeholder="Amount" name="amount" id="amount" value={formData.amount} onChange={handleChange}/>
        <div>
        <div className="select-style">
            <select name="category" value={formData.category} onChange={handleChange}>
                <option>Category</option>
                <option>Groceries</option>
                <option>Rent</option>
                <option>Bills</option>
            </select>
        </div>
        <div className="two-buttons">
        <button className="button-style button-small" type="button">+ category</button>
        <button className="button-style button-small" type="button">- category</button>
        </div>
        {/* <form className="form-container">
            <input placeholder="Category"></input>
            <span>$</span>
        </form> */}
        </div>
        <div>
            <button type="submit" className="button-style">Submit</button>
            <Link to="/" className="button-style button-small">&larr; go back</Link>
        </div>
    </form>
</div>
);
}

export default NewEntry;