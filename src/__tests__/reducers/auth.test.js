import * as types from '../../types/user';
import authReducer from '../../reducers/auth';

describe('Auth Reducer', () => {

    it('Should return default state', () => {
      const newState = authReducer(undefined, {});
      expect(newState).toEqual({
        authenticated: false
        });
    });

    it('Should return new state if receiving type', () => {
      const newState = authReducer(undefined, {
        type: types.USER_LOGED_IN_SUCCEEDED,
        payload: {
          id: 0,
          name: "name",
          token: "token",
        }
      });
      expect(newState).toEqual({
        id: 0,
        name: "name",
        token: "token",
        authenticated: true
      });

    });

});