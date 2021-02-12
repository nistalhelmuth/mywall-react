import {
  put,
  takeLatest,
  call,
  all,
  select,
} from 'redux-saga/effects';
import * as selectors from '../reducers';
import * as userTypes from '../types/user';
import * as userActions from '../actions/user';
import * as postApi from '../apis/user';

function* profileFetcher(action) {
  const {
    payload: {
      profileId,
    },
  } = action;
  try {
    const response = yield call(
      postApi.getProfileInfo,
      profileId
    );
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
  } catch (error) {
    yield put(userActions.fetchProfileInfoDecline({
      message: error,
    }));
  }
}

function* LoginSaga() {
  yield takeLatest(
    userTypes.FETCHED_USER_PROFILE,
    profileFetcher
  );
}

export default LoginSaga;
