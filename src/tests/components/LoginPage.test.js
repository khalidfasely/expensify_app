import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../components/LoginPage';

test('should render LoginPage correctly', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    const onLogInSpy = jest.fn();
    const wrapper = shallow(<Login startLogin={onLogInSpy} />);
    wrapper.find('button').simulate('click');
    expect(onLogInSpy).toHaveBeenCalled();
});