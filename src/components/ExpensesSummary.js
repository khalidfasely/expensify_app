import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectorExpense from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
    <div>
        Viewing {props.expenses.length} {props.expenses.length === 1 ? 'expense' : 'expenses'},
         totalling {numeral(expensesTotal(props.expenses) / 100).format('$0,0.00')}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectorExpense(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);