import * as types from '../../types/post';
import postReducer, { postDefaultState } from '../../reducers/post';

describe('Post Reducer', () => {

    it('Should return default state', () => {
      const newState = postReducer(undefined, {});
      expect(newState).toEqual({
        post: postDefaultState,
        byId: {},
        order: []
      });
    });

    it('Checking fetch posts profile', () => {
      const newState = postReducer(undefined, {
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