import React from 'react';
import { shallow } from 'enzyme';
import ExpenseItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseItem with data', () => {
    const wrapper = shallow(<ExpenseItem {...expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});