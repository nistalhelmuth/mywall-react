import * as types from '../../types/user';
import userReducer, { defaultUserState } from '../../reducers/user';

describe('User Reducer', () => {

    it('Should return default state', () => {
      const newState = userReducer(undefined, {});
      expect(newState).toEqual(defaultUserState);
    });

    it('Checking register decline', () => {
      const newState = userReducer(undefined, {
        type: types.USER_REGISTERED_FAILED,
        payload: {
          message: {
            other: "error testing",
          }
        }
      });
      expect(newState).toEqual({
        profileId: undefined,
        email: undefined,
        name: undefined,
        city: undefined,
        gender: undefined,
        dateCreated: undefined,
        loading: false,
        registerErrors: {
          email: undefined,
          name: undefined,
          city: undefined,
          gender: undefined,
          password: undefined,
          other: "error testing",
        }
      });
    });

    it('Checking logged in decline', () => {
      const newState = userReducer(undefined, {
        type: types.USER_LOGED_IN_FAILED,
        payload: {
          message: {
            other: "error testing",
          }
        }
      });
      expect(newState).toEqual({
        profileId: undefined,
        email: undefined,
        name: undefined,
        city: undefined,
        gender: undefined,
        dateCreated: undefined,
        loading: false,
        registerErrors: {
          email: undefined,
          name: undefined,
          city: undefined,
          gender: undefined,
          password: undefined,
          other: "error testing",
        }
      });
    });

    it('Checking fetch user profile', () => {
      const newState = userReducer(undefined, {
        type: types.FETCHED_USER_PROFILE_SUCCEEDED,
        payload: {
          profileId: 0,
          email: "test@test.com",
          name: "test",
          city: "test city",
          gender: "M",
          dateCreated: "2021-02-07T19:25:24Z",
        }
      });
      expect(newState).toEqual({
        profileId: 0,
        email: "test@test.com",
        name: "test",
        city: "test city",
        gender: "Male",
        loading: false,
        dateCreated: "2/7/2021"
      });
    });
});