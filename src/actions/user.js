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
  id,
  name,
  token,
}) => ({
  type: types.USER_LOGED_IN_SUCCEEDED,
  payload: {
    id,
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
  id,
  name,
  email,
}) => ({
  type: types.USER_REGISTERED_SUCCEEDED,
  payload: {
    id,
    name,
    email,
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
  profileId,
}) => ({
  type: types.FETCHED_USER_PROFILE,
  payload: {
    profileId,
  },
});

export const fetchProfileInfoConfirm = ({
  profileId,
  email,
  name,
  city,
  visitors,
  genre,
  feeling,
  dateCreated,
}) => ({
  type: types.FETCHED_USER_PROFILE_SUCCEEDED,
  payload: {
    profileId,
    email,
    name,
    city,
    visitors,
    genre,
    feeling,
    dateCreated,
  },
});

export const fetchProfileInfoDecline = ({
  error,
}) => ({
  type: types.FETCHED_USER_PROFILE_FAILED,
  payload: {
    error,
  },
});
