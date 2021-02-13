import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../utils';
import App from '../../components/App';

const setUp = () => {
  const wrapper = shallow(<App />);
  return { wrapper };
};

describe('App Component', () => {

  describe('Should Render', () => {
    let component;
    beforeEach(() => {
      component = setUp(); 
    });
  
    it('Should render without errors', () => {
      const wrapper = findByTestAtrr(component.wrapper, 'dataComponent');
      expect(wrapper.length).toBe(1);
    });
  });

});