
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps, testStore } from '../utils';
import Header, { customPropTypes } from '../../components/Header';

const setUp = ({
  props,
  initialState,
}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Header.WrappedComponent store={store} {...props}/>);
  return { wrapper, customPropTypes};
};

describe('Header Component', () => {

  describe('Should Render', () => {
    let component;
    beforeEach(() => {
      component = setUp({
        doLogin: jest.fn(),
        doLogout: jest.fn(),
        history: jest.fn(),
      }); 
    });
  
    it('Should render without errors', () => {
      const wrapper = findByTestAtrr(component.wrapper, 'headerComponent');
      expect(wrapper.length).toBe(1);
    });
  });

  describe('Cheking authorized behaviour', () => {
    let component
    component = setUp({
      props: {
        doLogin: jest.fn(),
        doLogout: jest.fn(),
        history: jest.fn(),
        authorized: true,
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
      component = setUp({
        props: {
          doLogin: jest.fn(),
          doLogout: jest.fn(),
          history: jest.fn(),
        }
      }); 
    });

    it('Should not throw a warning', () => {
        const expectedProps = {
          authorized: true,
          doLogin: jest.fn(),
          doLogout: jest.fn(),
          history: jest.fn(),
        };
        const propsErr = checkProps(component, expectedProps)
        expect(propsErr).toBeUndefined();
    });
  });

});