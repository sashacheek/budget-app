import '../index.css';
import { Link } from "react-router-dom";
import axios from "axios"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPen, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";


function NewEntry() {
    let [category, setCategory] = React.useState(JSON.parse(localStorage.getItem("categories")));

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

    const showRemoveCategory = () => {
        let addCategory = document.getElementById("add-category");
        addCategory.style.display = "none";

        let removeCategory = document.getElementById("remove-category");
        removeCategory.style.display = "block";
    }

    const addCategory = () => {
        let categories = JSON.parse(localStorage.getItem("categories")) || [];
        let newCategory = document.getElementById("add-category-input");
        if (!categories.includes(newCategory.value)) {
            categories.push(newCategory.value);
            localStorage.setItem("categories", JSON.stringify(categories));    
            newCategory.value = "";
            alert("category added")
        }
        else {
            alert("category already exists");
        }
        }

    const removeCategory = () => {
        let categories = JSON.parse(localStorage.getItem("categories")) || [];
        let newCategory = document.getElementById("remove-category-input");
        if (categories.includes(newCategory.value)) {
            //prompt("Are you sure? This will delete all entries with this category")
            //newCategories = categories.
        }
    }

    const showAddCategory = () => {
        let addCategory = document.getElementById("add-category");
        addCategory.style.display = "block";

        let removeCategory = document.getElementById("remove-category");
        removeCategory.style.display = "none";
    }

    const showCategoryOptions = () => {
        let categoryOptions = document.getElementById("category-options");
        categoryOptions.style.display = "flex";
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
        <button className="button-style button-small" type="button" onClick={showCategoryOptions}>edit categories</button>
        <div className="two-buttons" id="category-options">
        <button className="button-style button-small" type="button" onClick={showAddCategory}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
        <button className="button-style button-small" type="button" onClick={showRemoveCategory}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
        <button className="button-style button-small" type="button" onClick={showRemoveCategory}><FontAwesomeIcon icon={faPen}></FontAwesomeIcon></button>
        </div>
        </div>
        <div className="category-container" id="add-category">
            <div className="category-style">
                <input id="add-category-input" placeholder="Add Category"></input>
                <button type="button" className="category-check" onClick={addCategory}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></button>
            </div>
        </div>
        <div className="category-container" id="remove-category">
            <div className="select-style category-style">
                <select id="remove-category-input">
                    <option>Remove Category</option>
                    <option>Groceries</option>
                    <option>Rent</option>
                    <option>Bills</option>
                </select>
                {/* <input id="remove-category-input" placeholder="Remove Category"></input> */}
                <button type="button" className="category-check" onClick={removeCategory}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></button>
            </div>
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