import { runSaga } from 'redux-saga';
import * as postApi from '../../apis/post';
import * as userActions from '../../actions/user';
import * as postActions from '../../actions/post';
import * as postSagas from '../../sagas/post';

describe('Post sagas', () => {
  it('postFetcher succeeded', async () => {
    const dispatched = [];
    const resquestLogin = jest.spyOn(postApi, 'getAllPosts').mockImplementation(() => Promise.resolve({
      response: {
        results: [
          {
            id: 1,
            content: "content",
            date_created: "10/10/2020",
            created_by: {
              id: 1,
              name: "name",
            }
          }
        ],
        next: null,
      },
      error: false,
      logout: false,
    }));
    const testAction = postActions.fetchAllPosts({
      profileId: 1,
    });
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({ 
        postReducer: {
          post: {
            currentPage: 0,
            pageSize: 1,
          }
        }
      }),
    }, postSagas.postFetcher, testAction);
    expect(dispatched).toEqual([
      postActions.fetchAllPostsConfirm({
        allPosts: [
          {
            id: 1,
            content: "content",
            date_created: "10/10/2020",
            created_by: {
              id: 1,
              name: "name",
            }
          }
        ],
        currentPage: 1,
        nextPage: false,
      }),
    ]);
    resquestLogin.mockClear();
  });

  it('postFetcher fail', async () => {
    const dispatched = [];
    const resquestLogin = jest.spyOn(postApi, 'getAllPosts').mockImplementation(() => Promise.resolve({
      response: {
        detail: "not found",
      },
      error: true,
      logout: false,
    }));
    const testAction = postActions.fetchAllPosts({
      profileId: 1,
    });
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({ 
        postReducer: {
          post: {
            currentPage: 0,
            pageSize: 1,
          }
        }
      }),
    }, postSagas.postFetcher, testAction);
    expect(dispatched).toEqual([
      postActions.fetchAllPostsDecline({
        message: "not found",
      }),
    ]);
    resquestLogin.mockClear();
  });

  it('postFetcher logout', async () => {
    const dispatched = [];
    const resquestLogin = jest.spyOn(postApi, 'getAllPosts').mockImplementation(() => Promise.resolve({
      response: {
        detail: "not found",
      },
      error: true,
      logout: true,
    }));
    const testAction = postActions.fetchAllPosts({
      profileId: 1,
    });
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({ 
        postReducer: {
          post: {
            currentPage: 0,
            pageSize: 1,
          }
        }
      }),
    }, postSagas.postFetcher, testAction);
    expect(dispatched).toEqual([
      postActions.fetchAllPostsDecline({
        message: "not found",
      }),
      userActions.doLogout()
    ]);
    resquestLogin.mockClear();
  });

  it('commentsFetcher succeeded', async () => {
    const dispatched = [];
    const resquestLogin = jest.spyOn(postApi, 'getAllComments').mockImplementation(() => Promise.resolve({
      response: [
        {
          id: 1,
          content: "content",
          date_created: "10/10/2020",
          created_by: {
            id: 1,
            name: "name",
          }
        }
      ],
      error: false,
      logout: false,
    }));
    const testAction = postActions.fetchAllComments({
      postId: 1,
    });
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, postSagas.commentsFetcher, testAction);
    expect(dispatched).toEqual([
      postActions.fetchAllCommentsConfirm({
        allComments: [
          {
            id: 1,
            content: "content",
            date_created: "10/10/2020",
            created_by: {
              id: 1,
              name: "name",
            }
          }
        ],
        postId: 1,
      }),
    ]);
    resquestLogin.mockClear();
  });
  
  it('commentsFetcher failed', async () => {
    const dispatched = [];
    const resquestLogin = jest.spyOn(postApi, 'getAllComments').mockImplementation(() => Promise.resolve({
      response: {
        detail: "not found"
      },
      error: true,
      logout: false,
    }));
    const testAction = postActions.fetchAllComments({
      postId: 1,
    });
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, postSagas.commentsFetcher, testAction);
    expect(dispatched).toEqual([
      postActions.fetchAllCommentsDecline({
        message: "not found",
        postId: 1,
      }),
    ]);
    resquestLogin.mockClear();
  });

  it('commentsFetcher logout', async () => {
    const dispatched = [];
    const resquestLogin = jest.spyOn(postApi, 'getAllComments').mockImplementation(() => Promise.resolve({
      response: {
        detail: "not found"
      },
      error: true,
      logout: true,
    }));
    const testAction = postActions.fetchAllComments({
      postId: 1,
    });
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, postSagas.commentsFetcher, testAction);
    expect(dispatched).toEqual([
      postActions.fetchAllCommentsDecline({
        message: "not found",
        postId: 1,
      }),
      userActions.doLogout()
    ]);
    resquestLogin.mockClear();
  });

  it('postCreator succeeded', async () => {
    const dispatched = [];
    const resquestLogin = jest.spyOn(postApi, 'createPost').mockImplementation(() => Promise.resolve({
      response: {
        id: 1,
        content: "content",
        date_created: "10/10/2020",
        created_by: {
          id: 1,
          name: "name",
        }
      },
      error: false,
      logout: false,
    }));
    const testAction = postActions.createPost({
      content: "content",
      randomId: 2,
    });
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({ 
        authReducer: {
          token: "this is the token"
        }
      }),
    }, postSagas.postCreator, testAction);
    expect(dispatched).toEqual([
      postActions.createPostConfirm({
        id: 1,
        randomId: 2,
        content: "content",
        date_created: "10/10/2020",
        createdBy: {
          id: 1,
          name: "name",
        }
      }),
    ]);
    resquestLogin.mockClear();
  });

  it('postCreator failed', async () => {
    const dispatched = [];
    const resquestLogin = jest.spyOn(postApi, 'createPost').mockImplementation(() => Promise.resolve({
      response: {
        detail: "not found"
      },
      error: true,
      logout: false,
    }));
    const testAction = postActions.createPost({
      content: "content",
      randomId: 2,
    });
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({ 
        authReducer: {
          token: "this is the token"
        }
      }),
    }, postSagas.postCreator, testAction);
    expect(dispatched).toEqual([
      postActions.createPostDecline({
        randomId: 2,
        message: "not found",
      }),
    ]);
    resquestLogin.mockClear();
  });

  it('postCreator logout', async () => {
    const dispatched = [];
    const resquestLogin = jest.spyOn(postApi, 'createPost').mockImplementation(() => Promise.resolve({
      response: {
        detail: "not found"
      },
      error: true,
      logout: true,
    }));
    const testAction = postActions.createPost({
      content: "content",
      randomId: 2,
    });
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({ 
        authReducer: {
          token: "this is the token"
        }
      }),
    }, postSagas.postCreator, testAction);
    expect(dispatched).toEqual([
      postActions.createPostDecline({
        randomId: 2,
        message: "not found",
      }),
      userActions.doLogout()
    ]);
    resquestLogin.mockClear();
  });

  it('commentCreator succeeded', async () => {
    const dispatched = [];
    const resquestLogin = jest.spyOn(postApi, 'createComment').mockImplementation(() => Promise.resolve({
      response: {
        id: 2,
        content: "content",
        date_created: "10/10/2020",
        created_by: {
          id: 1,
          name: "name",
        }
      },
      error: false,
      logout: false,
    }));
    const testAction = postActions.commentPost({
      postId: 1,
      content: "content",
      randomId: 3,
    });
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({ 
        authReducer: {
          token: "this is the token"
        }
      }),
    }, postSagas.commentCreator, testAction);
    expect(dispatched).toEqual([
      postActions.commentPostConfirm({
        postId: 1,
        id: 2,
        randomId: 3,
        content: "content",
        dateCreated: "10/10/2020",
        createdBy: {
          id: 1,
          name: "name",
        }
      }),
    ]);
    resquestLogin.mockClear();
  });

  it('commentCreator failed', async () => {
    const dispatched = [];
    const resquestLogin = jest.spyOn(postApi, 'createComment').mockImplementation(() => Promise.resolve({
      response: {
        detail: "not found"
      },
      error: true,
      logout: false,
    }));
    const testAction = postActions.commentPost({
      postId: 1,
      content: "content",
      randomId: 3,
    });
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({ 
        authReducer: {
          token: "this is the token"
        }
      }),
    }, postSagas.commentCreator, testAction);
    expect(dispatched).toEqual([
      postActions.commentPostDecline({
        postId: 1,
        randomId: 3,
        message: "not found",
      }),
    ]);
    resquestLogin.mockClear();
  });
  
  it('commentCreator logout', async () => {
    const dispatched = [];
    const resquestLogin = jest.spyOn(postApi, 'createComment').mockImplementation(() => Promise.resolve({
      response: {
        detail: "not found"
      },
      error: true,
      logout: true,
    }));
    const testAction = postActions.commentPost({
      postId: 1,
      content: "content",
      randomId: 3,
    });
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({ 
        authReducer: {
          token: "this is the token"
        }
      }),
    }, postSagas.commentCreator, testAction);
    expect(dispatched).toEqual([
      postActions.commentPostDecline({
        postId: 1,
        randomId: 3,
        message: "not found",
      }),
      userActions.doLogout()
    ]);
    resquestLogin.mockClear();
  });
});