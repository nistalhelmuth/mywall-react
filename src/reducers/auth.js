// import * as types from '../types/login';

const stateShape = {
  id: 5,
  name: "Helmuth",
  token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1LCJ1c2VybmFtZSI6ImFsYXRvcnRyaXhAbGl2ZS5jb20iLCJleHAiOjE2MTMwMTA0MDksImVtYWlsIjoiYWxhdG9ydHJpeEBsaXZlLmNvbSJ9.Q-smBcIVqFhc7Fzuxi2ux7heWaRed6dO6i7NEuv9gEQ",
  authenticated: false,
};

const auth = (state = stateShape, action) => {
  switch (action.type) {
    /**
    case types.USER_LOGGED_SUCCEDED: {
      const {
        payload:{
          token
        }
      } = action;
      return {
        ...state,
        token,
        authenticated: true,
      };
    }
    case types.USER_LOGGED_FAILED:
    case types.USER_UNLOGGED_FAILED:
    case types.USER_UNLOGGED_SUCCEDED: {
      return state;
    }
     */
    default: {
      return state;
    }
  }
};

export default auth;

export const getUserToken = (state) => state.token;
export const getAuthId = (state) => state.id;
export const getAuthName = (state) => state.name;
