/* eslint-disable prettier/prettier */
const getTotalRevenue = transactions => {

    const arrAmount = transactions.map(item => item.amount);

    return arrAmount.reduce((total, amount) => total + amount);
};

// examples
const dayTransactions = [
    { userId: 22, amount: 60, operation: 'sell' },
    { userId: 22, amount: 160, operation: 'buy' },
    { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
console.log(result);