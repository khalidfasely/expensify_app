import React from 'react';
import ExpensesList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
      <ExpensesSummary />
      <ExpenseListFilters />
      <ExpensesList />
    </div>
);

export default ExpenseDashboardPage;