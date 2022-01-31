import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectorExpense from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ allExpenses, expensesCount, expensesCountTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesCountTotal / 100).format('$0,0.00');
    const hiddenExpenses = allExpenses.length - expensesCount;
    /*
    THIS CODE BELOW IS TO SHOW THE USER LOGGED IN AS A LINK, THIS LINK YOU TO A PAGE WITH URL /uid
    const user = firebase.auth().currentUser;
    <div>
        <Link to={`/${user.uid}`}>{user.displayName}</Link>
    </div>
    document.title = 'Dashboard';*/
    return (
    <div className="page-header">
        
        <div className="content-container">
            <h1 className="page-header__title">
                Viewing <span>{expensesCount}</span> { expenseWord }, totalling <span>{formattedExpensesTotal}</span>
            </h1>
            <span className="message_hidden">
                {hiddenExpenses > 0
                    ?
                    <p>{hiddenExpenses} hidden expense(s) because of filters.</p>
                    :
                    <p>0 expenses hidden.</p>
                }
            </span>
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>
    </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectorExpense(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesCountTotal: expensesTotal(visibleExpenses),
        allExpenses: state.expenses
    };
};

export default connect(mapStateToProps)(ExpensesSummary);


//import React from 'react';
//import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
//import numeral from 'numeral';
//import selectorExpense from '../selectors/expenses';
//import expensesTotal from '../selectors/expenses-total';
//
//export const ExpensesSummary = ({ expensesCount, expensesCountTotal }) => {
//    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
//    const formattedExpensesTotal = numeral(expensesCountTotal / 100).format('$0,0.00');
//    
//    return (
//    <div className="page-header">
//        <div className="content-container">
//            <h1 className="page-header__title">Viewing <span>{expensesCount}</span> { expenseWord }, totalling <span>{formattedExpensesTotal}</span></h1>
//            <div className="page-header__actions">
//                <Link className="button" to="/create">Add Expense</Link>
//            </div>
//        </div>
//    </div>
//    );
//};
//
//const mapStateToProps = (state) => {
//    const visibleExpenses = selectorExpense(state.expenses, state.filters);
//    return {
//        expensesCount: visibleExpenses.length,
//        expensesCountTotal: expensesTotal(visibleExpenses)
//    };
//};
//
//export default connect(mapStateToProps)(ExpensesSummary);