// take in localstorage data
// loop through entires
// add them up by category
// output labels and data

export function getWeekData() {

const data = JSON.parse(localStorage.getItem("spendingData"));

const categories = {};
let totalAmount = 0;

data.forEach( (entry) => {
    if (entry?.category && entry?.amount){
        const sevenDaysAgo = new Date - 7 * 24 * 60 * 60 * 1000;
        const entryDate = Date.parse(entry.date);
        if (entryDate > sevenDaysAgo) {
        if (!(entry.category in categories)) {
            categories[entry.category] = 0;
        }
        categories[entry.category] += parseInt(entry.amount);
        totalAmount += parseInt(entry.amount);
    }
}

})

for (let key in categories) {
    let percent = (Math.round((categories[key] / totalAmount) * 100));
    categories[key + " " + percent + "%"] = categories[key];
    delete categories[key]
}

return categories;

}