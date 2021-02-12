import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { findByTestAtrr, checkProps, testStore } from '../utils';
import Main from '../../components/Main';

const setUp = (initialState={}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Main store={store} />).childAt(0).dive();
  return wrapper;
};

const setUp2 = (initialState={}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Main store={store} />);
  return wrapper;
};

describe('Header Component', () => {

  describe('Should Render', () => {
    let component;
    beforeEach(() => {
      component = setUp(); 
    });
  
    it('Should render without errors', () => {
      const wrapper = findByTestAtrr(component, 'mainComponent');
      expect(wrapper.length).toBe(1);
    });
  });


  describe('Checking PropTypes', () => {
    let component;
    beforeEach(() => {
      component = setUp2(); 
    });

    it('Should not throw a warning', () => {
      const expectedProps = {
        posts: [],
        postLoading: false,
        authId: 123,
        fetchAllPost: jest.fn(),
      };
      console.log(component.propTypes, expectedProps)
      const propsErr = checkProps(component, expectedProps)
      expect(propsErr).toBeUndefined();

    });
  });
});