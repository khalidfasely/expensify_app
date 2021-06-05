import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, editExpense, removeExpense, startAddExpense, setExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref('expenses').set(expensesData).then(() => done());
});

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
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description : 'Mouse',
        amount: '500',
        note: 'This is the last one in the store',
        createdAt: 615
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    }).catch((e) => {
        console.log('error', e);
    });
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {};
    const expenseDefault = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault);
        done();
    }).catch((e) => {
        console.log('error', e);
    });
});

test('should setup set expenses action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});