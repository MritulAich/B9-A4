function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "please put valid number";
    }
    const expense = 500 + (8 * 50);
    const calculateMoney = (ticketSale * 120) - expense;
    return calculateMoney;
}



function checkName(name) {
    if (typeof name !== "string") {
        return "invalid";
    }

    const findLast = name.slice(-1);

    if (findLast === 'A') {
        return 'Good Name';
    }
    else if (findLast === 'a') {
        return 'Good Name';
    }
    else if (findLast === 'E') {
        return 'Good Name';
    }
    else if (findLast === 'e') {
        return 'Good Name';
    }
    else if (findLast === 'I') {
        return 'Good Name';
    }
    else if (findLast === 'i') {
        return 'Good Name';
    }
    else if (findLast === 'O') {
        return 'Good Name';
    }
    else if (findLast === 'o') {
        return 'Good Name';
    }
    else if (findLast === 'U') {
        return 'Good Name';
    }
    else if (findLast === 'u') {
        return 'Good Name';
    }
    else if (findLast === 'W') {
        return 'Good Name';
    }
    else if (findLast === 'w') {
        return 'Good Name';
    }
    else if (findLast === 'Y') {
        return 'Good Name';
    }
    else if (findLast === 'y') {
        return 'Good Name';
    }

    else {
        return 'Bad Name';
    }
}



function deleteInvalids(array) {
    if (Array.isArray(array) === false) {
        return 'please give an array with value';
    }
    let onlyNumbers = [];
    for (const arr of array) {
        if (isNaN(arr) === false && typeof arr === "number") {
            onlyNumbers.push(arr);
        }
    }
    return onlyNumbers;
}



function password(details) {
    const name = details.name;
    const birthYear = details.birthYear;
    const siteName = details.siteName;

    if (!details.hasOwnProperty('name') || !details.hasOwnProperty('birthYear') || !details.hasOwnProperty('siteName')) {
        return "invalid";
    }

    const birthYearCondition = Object.values(details.birthYear.toString());
    if (birthYearCondition.length != 4) {
        return "invalid";
    }

    const siteNameWithCondition = siteName.charAt(0).toUpperCase() + siteName.slice(1);

    const generatedPassword = siteNameWithCondition + "#" + name + "@" + birthYear;
    return generatedPassword;
}



function monthlySavings(allPayment, livingCost) {
    if (Array.isArray(allPayment) === false) {
        return 'invalid input'
    }

    let sum = 0;
    for (const payment of allPayment) {
        let newPayment = payment;
        if (payment >= 3000) {
            const withoutTax = payment - (payment * 0.2);
            newPayment = withoutTax;
        }
        sum = newPayment + sum;
    }
    const totalSavings = sum - livingCost;
    if (totalSavings < 0) {
        return 'earn more';
    }
    else {
        return totalSavings;
    }
}

