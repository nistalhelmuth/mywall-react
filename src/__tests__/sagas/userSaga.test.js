import { runSaga } from 'redux-saga';
import * as userApi from '../../apis/user';
import * as userActions from '../../actions/user';
import * as userSagas from '../../sagas/user';

describe('User sagas', () => {

  it('userLogIn succeeded', async () => {
    const dispatched = [];
    const resquestLogin = jest.spyOn(userApi, 'doLogin').mockImplementation(() => Promise.resolve({
      response: {
        id: 1,
        token: 'token',
        name: 'name',
      },
      error: false,
      logout: false,
    }));
    const testAction = userActions.doLogin({
      email: 'email',
      password: 'password',
    });
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, userSagas.userLogIn, testAction);
    expect(dispatched).toEqual([
      userActions.doLoginConfirm({
        id: 1,
        token: 'token',
        name: 'name',
      })
    ]);
    resquestLogin.mockClear();
  });

  it('userLogIn failed', async () => {
    const dispatched = [];
    const resquestLogin = jest.spyOn(userApi, 'doLogin').mockImplementation(() => Promise.resolve({
      response: {
        error: "error message"
      },
      error: true,
      logout: false,
    }));
    const testAction = userActions.doLogin({
      email: 'email',
      password: 'password',
    });
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, userSagas.userLogIn, testAction);
    expect(dispatched).toEqual([
      userActions.doLoginDecline({
        message: {
          email: 'error message',
        }
      })
    ]);
    resquestLogin.mockClear();
  });

  it('userLogIn logout', async () => {
    const dispatched = [];
    const resquestLogin = jest.spyOn(userApi, 'doLogin').mockImplementation(() => Promise.resolve({
      response: {
        error: 'error message',
      },
      error: true,
      logout: true,
    }));
    const testAction = userActions.doLogin({
      email: 'email',
      password: 'password',
    });
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, userSagas.userLogIn, testAction);
    expect(dispatched).toEqual([
      userActions.doLoginDecline({
        message: {
          email: 'error message',
        }
      }),
      userActions.doLogout()
    ]);
    resquestLogin.mockClear();
  });

  it('userRegister succeeded', async () => {
    const dispatched = [];
    const resquestLogin = jest.spyOn(userApi, 'registerUser').mockImplementation(() => Promise.resolve({
      response: {
        id: 1,
        email: "test@test.com",
        name: "name",
        city: "City",
        gender: "M",
      },
      error: false,
      logout: false,
    }));
    const testAction = userActions.registerUser({
      email: "test@test.com",
      name: "name",
      city: "City",
      gender: "M",
      password: "password123",
    });
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, userSagas.userRegister, testAction);
    expect(dispatched).toEqual([
      userActions.registerUserConfirm({
        profileId: 1,
        email: "test@test.com",
        name: "name",
        city: "City",
        gender: "M",
      })
    ]);
    resquestLogin.mockClear();
  });

  it('userRegister fail', async () => {
    const dispatched = [];
    const resquestLogin = jest.spyOn(userApi, 'registerUser').mockImplementation(() => Promise.resolve({
      response: {
        id: 1,
        email: "test@test.com",
        name: "name",
        city: "City",
        gender: "M",
      },
      error: true,
      logout: false,
    }));
    const testAction = userActions.registerUser({
      email: "test@test.com",
      name: "name",
      city: "City",
      gender: "M",
      password: "password123",
    });
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, userSagas.userRegister, testAction);
    expect(dispatched).toEqual([
      userActions.registerUserDecline({
        message: {
          id: 1,
          email: "test@test.com",
          name: "name",
          city: "City",
          gender: "M",
        }
      })
    ]);
    resquestLogin.mockClear();
  });

  it('userRegister logout', async () => {
    const dispatched = [];
    const resquestLogin = jest.spyOn(userApi, 'registerUser').mockImplementation(() => Promise.resolve({
      response: {
        id: 1,
        email: "test@test.com",
        name: "name",
        city: "City",
        gender: "M",
      },
      error: true,
      logout: true,
    }));
    const testAction = userActions.registerUser({
      email: "test@test.com",
      name: "name",
      city: "City",
      gender: "M",
      password: "password123",
    });
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, userSagas.userRegister, testAction);
    expect(dispatched).toEqual([
      userActions.registerUserDecline({
        message: {
          id: 1,
          email: "test@test.com",
          name: "name",
          city: "City",
          gender: "M",
        }
      }),
      userActions.doLogout()
    ]);
    resquestLogin.mockClear();
  });

  it('profile Fetcher succeeded', async () => {
    const dispatched = [];
    const resquestLogin = jest.spyOn(userApi, 'getProfileInfo').mockImplementation(() => Promise.resolve({
      response: {
        id: 1,
        email: "test@test.com",
        name: "name",
        city: "City",
        gender: "M",
        date_created: "10/10/2020"
      },
      error: false,
      logout: false,
    }));
    const testAction = userActions.registerUser({
      profileId: 1,
    });
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, userSagas.profileFetcher, testAction);
    expect(dispatched).toEqual([
      userActions.fetchProfileInfoConfirm({
        profileId: 1,
        email: "test@test.com",
        name: "name",
        city: "City",
        gender: "M",
        dateCreated: "10/10/2020"
      })
    ]);
    resquestLogin.mockClear();
  });

  it('profile Fetcher fail', async () => {
    const dispatched = [];
    const resquestLogin = jest.spyOn(userApi, 'getProfileInfo').mockImplementation(() => Promise.resolve({
      response: {
        detail: "not found"
      },
      error: true,
      logout: false,
    }));
    const testAction = userActions.registerUser({
      profileId: 1,
    });
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, userSagas.profileFetcher, testAction);
    expect(dispatched).toEqual([
      userActions.fetchProfileInfoDecline({
        message: {
          other: "not found"
        }
      })
    ]);
    resquestLogin.mockClear();
  });

  it('profile Fetcher logout', async () => {
    const dispatched = [];
    const resquestLogin = jest.spyOn(userApi, 'getProfileInfo').mockImplementation(() => Promise.resolve({
      response: {
        detail: "not found"
      },
      error: true,
      logout: true,
    }));
    const testAction = userActions.registerUser({
      profileId: 1,
    });
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, userSagas.profileFetcher, testAction);
    expect(dispatched).toEqual([
      userActions.fetchProfileInfoDecline({
        message: {
          other: "not found"
        }
      }),
      userActions.doLogout()
    ]);
    resquestLogin.mockClear();
  });
});