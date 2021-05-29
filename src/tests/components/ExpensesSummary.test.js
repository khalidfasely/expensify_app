import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary with 1 expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with 2 or more expenses correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});