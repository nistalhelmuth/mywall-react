import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps, testStore } from '../utils';
import Main, { customPropTypes } from '../../components/Main';

const setUp = (initialState={}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Main store={store} />).childAt(0).dive();
  return { wrapper, customPropTypes};
};

describe('Header Component', () => {

  describe('Should Render', () => {
    let component;
    beforeEach(() => {
      component = setUp(); 
    });
  
    it('Should render without errors', () => {
      const wrapper = findByTestAtrr(component.wrapper, 'mainComponent');
      expect(wrapper.length).toBe(1);
    });
  });

  describe('Checking PropTypes', () => {
    let component;
    beforeEach(() => {
      component = setUp(); 
    });

    it('Should not throw a warning', () => {
        const expectedProps = {
          authId: 1,
          posts: [],
          postLoading: false,
          fetchAllPost: jest.fn(),
        };
        const propsErr = checkProps(component, expectedProps)
        expect(propsErr).toBeUndefined();
    });
  });
});