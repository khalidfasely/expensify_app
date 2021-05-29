export default (expenses) => {
    let total = 0;
    for (var i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    };
    return total;
};

//export default (expenses) => {
//    return expenses
//        .map((expense) => expense.amount)
//        .reduce((sum, value) => sum + value, 0);
//};