// import * as types from '../types/login';

const stateShape = {
  id: 5,
  name: "Helmuth",
  token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1LCJ1c2VybmFtZSI6ImFsYXRvcnRyaXhAbGl2ZS5jb20iLCJleHAiOjE2MTMwMTg3MjEsImVtYWlsIjoiYWxhdG9ydHJpeEBsaXZlLmNvbSJ9.FlYRTIHiX_0Ox5w_U_9Y2yG8QcqezVoLJLIPCEtqdaU",
  authenticated: true,
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
export const getIfAuthorized = (state) => state.authenticated;
export const getAuthId = (state) => state.id;
export const getAuthName = (state) => state.name;
