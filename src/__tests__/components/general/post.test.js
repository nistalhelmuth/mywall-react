import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps, testStore } from '../../utils';
import Post, { customPropTypes } from '../../../components/General/Post';

const setUp = ({
  props,
  initialState
}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Post {...props} store={store} />).childAt(0).dive();
  return { wrapper, customPropTypes };
};

describe('Post Component', () => {

  describe('Should Render', () => {
    let component;
    beforeEach(() => {
      component = setUp({}); 
    });
  
    it('Should render without errors', () => {
      const wrapper = findByTestAtrr(component.wrapper, 'postComponent').childAt(0).dive();
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
        comments: [
          {
            id: 1,
            content: "Content test text",
            dateCreated: "01/01/2020",
            created_by: {
              id: 1,
              name: "Test name"
            },
          },
        ],
        created_by: {
          id: 1,
          name: "Test name"
        },
        createComment: jest.fn(),
        commentLoading: false,
        authId: 1,
        authName: "Test name",
        fetchComments: jest.fn(),
        postId: 1,
      };
      const propsErr = checkProps(component, expectedProps)
      expect(propsErr).toBeUndefined();
    });
  });

});