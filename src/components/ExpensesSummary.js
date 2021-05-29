import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectorExpense from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expensesCount, expensesCountTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesCountTotal / 100).format('$0,0.00');
    
    return (
    <div>
        <h1>Viewing {expensesCount} { expenseWord }, totalling {formattedExpensesTotal}</h1>
    </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectorExpense(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesCountTotal: expensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);