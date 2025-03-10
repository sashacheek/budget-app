export function getMonthData() {

    const data = JSON.parse(localStorage.getItem("spendingData")) || [];
    
    const categories = {};
    let totalAmount = 0;
    
    data.forEach( (entry) => {
        if (entry?.category && entry?.amount){
            const thirtyDaysAgo = new Date - 30 * 24 * 60 * 60 * 1000;
            const entryDate = Date.parse(entry.date);
            if (entryDate > thirtyDaysAgo) {
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