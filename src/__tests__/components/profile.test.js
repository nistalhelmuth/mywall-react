
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps, testStore } from '../utils';
import Profile, { customPropTypes } from '../../components/Profile';

const setUp = ({
  props,
  initialState,
}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Profile.WrappedComponent store={store} {...props}/>);
  return { wrapper, customPropTypes };
};

describe('Profile Component', () => {

  describe('Should Render', () => {
    let component;
    beforeEach(() => {
      component = setUp({
        props: {
          userInformation: {
            email: "test",
            name: "test",
            city: "test",
            genre: "test",
            dateCreated: "test",
          },
          match: {
            params: {
              profileId: "2",
            }
          },
          fetchAllPostForUser: jest.fn(),
        },
      }); 
    });
  
    it('Should render without errors', () => {
      const wrapper = findByTestAtrr(component.wrapper, 'profileComponent');
      expect(wrapper.length).toBe(1);
    });
  });

  
  describe('Checking PropTypes', () => {
    let component;
    beforeEach(() => {
      component = setUp({
        props: {
          userInformation: {
            email: "test",
            name: "test",
            city: "test",
            genre: "test",
            dateCreated: "test",
          },
          match: {
            params: {
              profileId: "2",
            }
          },
          fetchAllPostForUser: jest.fn(),
        },
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
          postLoading: true,
          authId: 1,
          fetchAllPostForUser: jest.fn(),
        };
        const propsErr = checkProps(component, expectedProps)
        expect(propsErr).toBeUndefined();
    });
  });

});