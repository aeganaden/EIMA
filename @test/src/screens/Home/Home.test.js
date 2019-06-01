// Libs
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// Module
import Home from '@/screens/Home/';

describe('Screen Home', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Home />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
