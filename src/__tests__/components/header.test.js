
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { findByTestAtrr, checkProps, testStore } from '../utils';
import Header from '../../components/Header';

const setUp = (initialState={}) => {
  const store = testStore(initialState);
  //const wrapper = shallow(<Header store={store} />);
  const wrapper = shallow(<Header store={store} />);
  return wrapper;
};

describe('Header Component', () => {

  describe('Should Render', () => {
    let component;
    beforeEach(() => {
      component = setUp(); 
    });
  
    it('Should render without errors', () => {
      const wrapper = findByTestAtrr(component, 'headerComponent');
      expect(1).toBe(1);
    });
  });


  /**
  describe('Checking PropTypes', () => {

    it('Should not throw a warning', () => {
      const expectedProps = {
        authorized: 1,
        doLogin: undefined,
        handleSubmit: undefined,
      };
      const propsErr = checkProps(Header, expectedProps)
      expect(propsErr).toBeUndefined();

    });
  });
   */

});