import React from 'react';
import { connect } from 'react-redux';
import ExpenseItem from './ExpenseListItem';
import selectorExpense from '../selectors/expenses';

export const ExpensesList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item__message">
                        <span>No expenses</span>
                    </div>
                ) : (
                    props.expenses.map((expense) => {
                    return <ExpenseItem key={expense.id} {...expense} />
                })
                )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectorExpense(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesList);