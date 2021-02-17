import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps, testStore } from '../utils';
import Register, { customPropTypes } from '../../components/Register';

const setUp = ({
  initialState,
}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Register store={store}/>).childAt(0).dive();
  return { wrapper, customPropTypes};
};

describe('Register Component', () => {

  describe('Should Render', () => {
    let component;
    beforeEach(() => {
      component = setUp({}); 
    });
  
    it('Should render without errors', () => {
      const wrapper = findByTestAtrr(component.wrapper, 'registerComponent');
      expect(wrapper.length).toBe(1);
    });
  });

  describe('Checking PropTypes', () => {
    let component;
    beforeEach(() => {
      component = setUp({}); 
    });

    it('Should not throw a warning', () => {
        const expectedProps = {
          userLoading: false,
          doRegister: jest.fn(),
        };
        const propsErr = checkProps(component, expectedProps)
        expect(propsErr).toBeUndefined();
    });
  });
});