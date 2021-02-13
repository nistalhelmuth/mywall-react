import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps, testStore } from '../../utils';
import Comment, { customPropTypes } from '../../../components/General/Comment';

const setUp = ({
  props,
  initialState
}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Comment {...props} store={store} />).childAt(0).dive();
  return { wrapper, customPropTypes };
};

describe('Comment Component', () => {

  describe('Should Render', () => {
    let component;
    beforeEach(() => {
      component = setUp({}); 
    });
  
    it('Should render without errors', () => {
      const wrapper = findByTestAtrr(component.wrapper, 'commentComponent');
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
        content: "Content test text",
        dateCreated: "01/01/2020",
        created_by: {
          id: 1,
          name: "Test name"
        },
        authId: 1,
        authName: "Test name",
      };
      const propsErr = checkProps(component, expectedProps)
      expect(propsErr).toBeUndefined();
    });
  });

});