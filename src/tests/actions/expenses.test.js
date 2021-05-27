import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should set up edit expense action object', () => {
    const action = editExpense('123acb', { note: 'New Note Value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123acb',
        updates: { note: 'New Note Value' }
    });
});

test('should setup add expense action object with provided value', () => {
    const expenseData = {
        description: 'Coffee',
        amount: 250,
        createdAt: 1000,
        note: 'some note'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default value', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});