import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps, testStore } from '../../utils';
import Wall, { customPropTypes } from '../../../components/General/Wall';

const setUp = ({
  props,
  initialState
}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Wall.WrappedComponent {...props} store={store} />);
  return { wrapper, customPropTypes };
};

describe('Wall Component', () => {

  describe('Should Render', () => {
    let component;
    beforeEach(() => {
      component = setUp({
        props: {
          fetchPosts: jest.fn(),
          createPost: jest.fn(),
        }
      }); 
    });
  
    it('Should render without errors', () => {
      const wrapper = findByTestAtrr(component.wrapper, 'wallComponent');
      expect(wrapper.length).toBe(1);
    });
  });

  describe('Cheking behaviour', () => {
    let component
    component = setUp({
      props: {
        enabledPost: true,
        loading: true,
        fetchPosts: jest.fn(),
        createPost: jest.fn(),
        posts: [
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
      }
    }); 
    it('Form Component', () => {
      const wrapper = findByTestAtrr(component.wrapper, 'postFormComponent');
      expect(wrapper.length).toBe(1);
    });
    it('Post List', () => {
      const wrapper = findByTestAtrr(component.wrapper, 'postPlaceholderComponent');
      expect(wrapper.length).toBe(0);
    });
    it('Loader Component', () => {
      const wrapper = findByTestAtrr(component.wrapper, 'postLoadingComponent');
      expect(wrapper.length).toBe(1);
    });
  });

  describe('Checking PropTypes', () => {
    let component;
    beforeEach(() => {
      component = setUp({
        props: {
          fetchPosts: jest.fn(),
          createPost: jest.fn(),
        }
      }); 
    });

    it('Should not throw a warning', () => {
      const expectedProps = {
        posts: [
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
        createPost: jest.fn(),
        fetchPosts: jest.fn(),
        enabledPost: false,
        loadgin: false,
      };
      const propsErr = checkProps(component, expectedProps)
      expect(propsErr).toBeUndefined();
    });
  });

});