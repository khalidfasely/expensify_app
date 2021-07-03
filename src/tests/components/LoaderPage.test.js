import React from 'react';
import { shallow } from 'enzyme';
import LoaderPage from '../../components/LoaderPage';

test('shouldrender LoaderPage correctly', () => {
    const wrapper = shallow(<LoaderPage />);
    expect(wrapper).toMatchSnapshot();
});
