import { fork, all } from 'redux-saga/effects';
import UserSaga from './user';
import PostSaga from './post';

function* mainSaga() {
  yield all([
    fork(UserSaga),
    fork(PostSaga),
  ]);
}

export default mainSaga;
