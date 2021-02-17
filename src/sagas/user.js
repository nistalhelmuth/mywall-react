import {
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';
import { forwardTo } from '../history';
import * as userTypes from '../types/user';
import * as userActions from '../actions/user';
import * as userApi from '../apis/user';

export function* profileFetcher(action) {
  const {
    payload: {
      profileId,
    },
  } = action;
  try {
    const {
      response,
      error,
      logout,
    } = yield call(
      userApi.getProfileInfo,
      profileId
    );
    if(!error){
      yield put(userActions.fetchProfileInfoConfirm({
        profileId: response.id,
        email: response.email,
        name: response.name,
        city: response.city,
        gender: response.gender,
        dateCreated: response.date_created,
      }));
    } else {
      yield put(userActions.fetchProfileInfoDecline({
        message: {
          other: response.detail,
        }
      }));
      yield call(forwardTo, '/');
    }
    if (logout) {
      // alert("Your session has expired");
      yield put(userActions.doLogout())
    }
  } catch (error) {
    yield put(userActions.fetchProfileInfoDecline({
      message: {
        other:"Something went wrong :("
      },
    }));
  }
}

export function* userRegister(action) {
  const {
    payload: {
      email,
      name,
      city,
      gender,
      password,
    },
  } = action;
  try {
    const {
      response,
      error,
      logout,
    } = yield call(
      userApi.registerUser,
      email,
      name,
      city,
      gender,
      password,
    );
    if(!error){
      yield call(forwardTo, '/');
      yield put(userActions.registerUserConfirm({
        profileId: response.id,
        email: response.email,
        name: response.name,
        city: response.city,
        gender: response.gender,
      }));
    } else {
      yield put(userActions.registerUserDecline({
        message: response,
      }));  
    }
    if (logout) {
      // alert("Your session has expired");
      yield put(userActions.doLogout())
    }
  } catch (error) {
    yield put(userActions.registerUserDecline({
      message: {
        other: "Something went wrong :("
      },
    }));
  }
}

export function* userLogIn(action) {
  const {
    payload: {
      email,
      password,
    },
  } = action;
  try {
    const {
      response,
      error,
      logout,
    } = yield call(
      userApi.doLogin,
      email,
      password,
    );
    if(!error){
      yield put(userActions.doLoginConfirm({
        id: response.id,
        token: response.token,
        name: response.name,
      }));
    } else {
      yield put(userActions.doLoginDecline({
        message: {
          email: response.error,
        }
      }));
    }
    if (logout) {
      // alert("Your session has expired");
      yield put(userActions.doLogout())
    }
  } catch (error) {
    console.log(error)
    yield put(userActions.doLoginDecline({
      message: {
        email: "Something went wrong :(",
      },
    }));
  }
}



function* LoginSaga() {
  yield takeLatest(
    userTypes.FETCHED_USER_PROFILE,
    profileFetcher
  );
  yield takeLatest(
    userTypes.USER_REGISTERED,
    userRegister
  );
  yield takeLatest(
    userTypes.USER_LOGED_IN,
    userLogIn
  );
}

export default LoginSaga;
