import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import mainSaga from './sagas';

export const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'authReducer',
  ],
};

const configureStore = () => {
  const persistedReducer = persistReducer(persistConfig, reducer);
  const store = createStore(
    persistedReducer,
    compose (
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(mainSaga);
  return { store, persistor };
};


export default configureStore;
