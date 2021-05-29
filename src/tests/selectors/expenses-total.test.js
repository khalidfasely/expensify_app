import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expense', () => {
    const newExpenses = [];
    const result = getExpensesTotal(newExpenses);
    expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
    const newExpenses = [expenses[0]];
    const amount = expenses[0].amount;
    const result = getExpensesTotal(newExpenses);
    expect(result).toBe(amount);
});

test('should correctly add up multiple expenses', () => {
    const amount = 183350; // I got this number from the termial after count the total
    const result = getExpensesTotal(expenses);
    expect(result).toBe(amount);
});
