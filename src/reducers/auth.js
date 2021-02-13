import * as types from '../types/user';

const stateShape = {
  id: undefined,
  name: undefined,
  token: undefined,
  authenticated: false,
};

const auth = (state = stateShape, action) => {
  switch (action.type) {
    case types.USER_LOGED_IN_SUCCEEDED: {
      const {
        payload:{
          id,
          name,
          token,
        }
      } = action;
      return {
        ...state,
        id,
        name,
        token,
        authenticated: true,
      };
    }
    case types.USER_LOGED_IN_FAILED:
    case types.USER_LOGED_OUT: {
      return stateShape;
    }
    default: {
      return state;
    }
  }
};

export default auth;

export const getUserToken = (state) => state.token;
export const getIfAuthorized = (state) => state.authenticated;
export const getAuthId = (state) => state.id;
export const getAuthName = (state) => state.name;
