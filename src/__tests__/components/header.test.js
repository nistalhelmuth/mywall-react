
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps, testStore } from '../utils';
import Header, { customPropTypes } from '../../components/Header';

const setUp = ({
  props,
  initialState,
}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Header {...props} store={store} />).childAt(0).dive();
  return { wrapper, customPropTypes};
};

describe('Header Component', () => {

  describe('Should Render', () => {
    let component;
    beforeEach(() => {
      component = setUp({}); 
    });
  
    it('Should render without errors', () => {
      const wrapper = findByTestAtrr(component.wrapper, 'headerComponent').childAt(0).dive();
      expect(wrapper.length).toBe(1);
    });
  });

  describe('Cheking authorized behaviour', () => {
    let component
    component = setUp({
      initialState: {
        authReducer: {
          authenticated: true,
        }
      }
    }); 
    it('Authorized', () => {
      const wrapper = findByTestAtrr(component.wrapper, 'authorizedComponent');
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
          authorized: true,
          doLogin: jest.fn(),
        };
        const propsErr = checkProps(component, expectedProps)
        expect(propsErr).toBeUndefined();
    });
  });

});