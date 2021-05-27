import React from 'react';
import { connect } from 'react-redux';
import ExpenseItem from './ExpenseListItem';
import selectorExpense from '../selectors/expenses';

export const ExpensesList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                return <ExpenseItem key={expense.id} {...expense} />
            })
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectorExpense(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesList);