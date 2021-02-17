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
  message,
}) => ({
  type: types.USER_LOGED_IN_FAILED,
  payload: {
    message,
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
  gender,
  password
}) => ({
  type: types.USER_REGISTERED,
  payload: {
    email,
    name,
    city,
    gender,
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
  message,
}) => ({
  type: types.USER_REGISTERED_FAILED,
  payload: {
    message,
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
  gender,
  dateCreated,
}) => ({
  type: types.FETCHED_USER_PROFILE_SUCCEEDED,
  payload: {
    profileId,
    email,
    name,
    city,
    gender,
    dateCreated,
  },
});

export const fetchProfileInfoDecline = ({
  message,
}) => ({
  type: types.FETCHED_USER_PROFILE_FAILED,
  payload: {
    message,
  },
});
