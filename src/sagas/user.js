import {
  put,
  takeLatest,
  call,
  delay,
} from 'redux-saga/effects';
import { forwardTo } from '../history';
import * as userTypes from '../types/user';
import * as userActions from '../actions/user';
import * as postApi from '../apis/user';

function* profileFetcher(action) {
  const {
    payload: {
      profileId,
    },
  } = action;
  yield delay(500);
  try {
    const {
      response,
      error,
      logout,
    } = yield call(
      postApi.getProfileInfo,
      profileId
    );
    if(!error){
      yield put(userActions.fetchProfileInfoConfirm({
        profileId: response.id,
        email: response.email,
        name: response.name,
        city: response.city,
        visitors: response.visitors,
        genre: response.genre,
        feeling: response.feeling,
        dateCreated: response.date_created,
      }));
    } else {
      yield put(userActions.fetchProfileInfoDecline({
        message: response,
      }));
    }
    if (logout) {
      alert("Your session has expired");
      yield put(userActions.doLogout())
    }
  } catch (error) {
    yield put(userActions.fetchProfileInfoDecline({
      message: "Something went wrong :(",
    }));
  }
}

function* userRegister(action) {
  const {
    payload: {
      email,
      name,
      city,
      genre,
      password,
    },
  } = action;
  yield delay(500);
  try {
    const {
      response,
      error,
      logout,
    } = yield call(
      postApi.registerUser,
      email,
      name,
      city,
      genre,
      password,
    );
    if(!error){
      yield call(forwardTo, '/');
      yield put(userActions.registerUserConfirm({
        profileId: response.id,
        email,
        name,
        city,
        genre,
        password,
      }));
    } else {
      yield put(userActions.registerUserDecline({
        message: response,
      }));  
    }
    if (logout) {
      alert("Your session has expired");
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

function* userLogIn(action) {
  const {
    payload: {
      email,
      password,
    },
  } = action;
  yield delay(500);
  try {
    const {
      response,
      error,
      logout,
    } = yield call(
      postApi.doLogin,
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
      alert("Your session has expired");
      yield put(userActions.doLogout())
    }
  } catch (error) {
    console.log(error)
    yield put(userActions.doLoginDecline({
      message: {
        other: "Something went wrong :(",
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
