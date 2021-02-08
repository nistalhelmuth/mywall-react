import * as types from '../types/user';

export const doLogin = ({
  email,
  password,
}) => ({
  type: types.USER_LOGED_IN,
  payload: {
    email,
    password,
  },
});

export const doLoginConfirm = ({
  name,
  token,
}) => ({
  type: types.USER_LOGED_IN_SUCCEEDED,
  payload: {
    name,
    token,
  },
});

export const doLoginDecline = ({
  error,
}) => ({
  type: types.USER_LOGED_IN_FAILED,
  payload: {
    error,
  },
});

export const doLogout = () => ({
  type: types.USER_LOGED_OUT,
  payload: {

  },
});

export const doLogoutConfirm = () => ({
  type: types.USER_LOGED_OUT_SUCCEEDED,
  payload: {

  },
});

export const doLogoutDecline = () => ({
  type: types.USER_LOGED_OUT_FAILED,
  payload: {

  },
});

export const registerUser = ({
  email,
  name,
  city,
  genre,
  password
}) => ({
  type: types.USER_REGISTERED,
  payload: {
    email,
    name,
    city,
    genre,
    password
  },
});

export const registerUserConfirm = ({

}) => ({
  type: types.USER_REGISTERED_SUCCEEDED,
  payload: {

  },
});

export const registerUserDecline = ({
  error,
}) => ({
  type: types.USER_REGISTERED_FAILED,
  payload: {
    error,
  },
});

export const fetchProfileInfo = ({
  id,
}) => ({
  type: types.FETCHED_USER_PROFILE,
  payload: {
    id,
  },
});

export const fetchProfileInfoConfirm = ({

}) => ({
  type: types.FETCHED_USER_PROFILE_SUCCEEDED,
  payload: {

  },
});

export const fetchProfileInfoDecline = () => ({
  type: types.FETCHED_USER_PROFILE_FAILED,
  payload: {

  },
});
