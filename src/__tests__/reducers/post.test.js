import * as types from '../../types/post';
import postReducer, { postDefaultState } from '../../reducers/post';

describe('Post Reducer', () => {

    it('Should return default state', () => {
      const newState = postReducer(undefined, {});
      expect(newState).toEqual({
        post: postDefaultState,
        byId: {},
        order: []
      });
    });

    it('Checking fetch posts', () => {
      const newState = postReducer(undefined, {
        type: types.FETCHED_ALL_POSTS,
        payload: {
          clean: true,
        }
      });
      expect(newState).toEqual({
        post: {
          loadingPosts: true,
          postErrors: undefined,
          nextPage: false,
          currentPage: -1,
          pageSize: 3,
        },
        byId: {},
        order: []
      });
    });

    it('Checking fetch posts succeeded', () => {
      const newState2 = postReducer(undefined, {
        type: types.FETCHED_ALL_POSTS_SUCCEEDED,
        payload: {
          currentPage: 0,
          nextPage: false,
          allPosts: [
            {
              id: 1,
              content: "Content test text",
              date_created: "2021-02-07T19:25:24Z",
              created_by: {
                id: 1,
                name: "Test name"
              },
            },
          ],
        }
      });
      expect(newState2).toEqual({
        post: {
          loadingPosts: false,
          postErrors: undefined,
          nextPage: false,
          currentPage: 0,
          pageSize: 3,
        },
        byId: {
          1:  {
            id: 1,
            content: "Content test text",
            dateCreated: "2/7/2021",
            commentsById: {},
            commentsOrder: [],
            commentsErrors: undefined,
            loadingComments: false,            
            createdBy: {
              id: 1,
              name: "Test name"
            },
          },
        },
        order: [1]
      });

    });

    it('Checking fetch comments', () => {
      const newState = postReducer({
        byId: {
          1:  {
            id: 1,
            content: "Content test text",
            dateCreated: "2/7/2021",
            date_created: "2021-02-07T19:25:24Z",
            commentsById: {},
            commentsOrder: [],
            commentsErrors: undefined,
            loadingComments: false,
            createdBy: {
              id: 1,
              name: "Test name"
            },
          },
        },
        order: [1]
      }, {
        type: types.FETCHED_ALL_COMMENTS,
        payload: {
          postId: 1,
        }
      });
      expect(newState).toEqual({
        post: {
          loadingPosts: false,
          nextPage: false,
          currentPage: -1,
          pageSize: 3,
        },
        byId: {
          1:  {
            id: 1,
            content: "Content test text",
            dateCreated: "2/7/2021",
            date_created: "2021-02-07T19:25:24Z",
            commentsById: {},
            commentsOrder: [],
            commentsErrors: undefined,
            loadingComments: true,
            createdBy: {
              id: 1,
              name: "Test name"
            },
          },
        },
        order: [1]
      });
    });

    it('Checking fetch comments succeeded', () => {
      const newState2 = postReducer({
        post: {
          loadingPosts: false,
          postErrors: undefined,
          nextPage: false,
          currentPage: 0,
          pageSize: 3,
        },
        byId: {
          1:  {
            id: 1,
            content: "Content test text",
            dateCreated: "2/7/2021",
            commentsById: {},
            commentsOrder: [],
            loadingComments: true,
            createdBy: {
              id: 1,
              name: "Test name"
            },
          },
        },
        order: [1]
      }, {
        type: types.FETCHED_ALL_COMMENTS_SUCCEEDED,
        payload: {
          postId: 1,
          allComments: [
            {
              id: 1,
              content: "Content test text",
              date_created: "2021-02-07T19:25:24Z",
              created_by: {
                id: 1,
                name: "Test name"
              },
            },
          ],
        }
      });
      expect(newState2).toEqual({
        post: {
          loadingPosts: false,
          postErrors: undefined,
          nextPage: false,
          currentPage: 0,
          pageSize: 3,
        },
        byId: {
          1:  {
            id: 1,
            content: "Content test text",
            dateCreated: "2/7/2021",
            commentsById: {
              1: {
                id: 1,
                content: "Content test text",
                dateCreated: "2/7/2021",
                createdBy: {
                  id: 1,
                  name: "Test name"
                },
              }
            },
            commentsOrder: [1],
            loadingComments: false,
            createdBy: {
              id: 1,
              name: "Test name"
            },
          },
        },
        order: [1]
      });
    });

    it('Checking posts creation', () => {
      const newState = postReducer(undefined, {
        type: types.CREATED_POST,
        payload: {
          content: "test content",
          randomId: 1,
        }
      });
      expect(newState).toEqual({
        post: {
          loadingPosts: false,
          postErrors: undefined,
          nextPage: false,
          currentPage: -1,
          pageSize: 3,
        },
        byId: {
          1: {
            content: "test content",
            commentsById: {},
            commentsOrder: [],
          }
        },
        order: [1]
      });
    });

    it('Checking posts creation succeeded', () => {
      const newState2 = postReducer(undefined, {
        type: types.CREATED_POST_SUCCEEDED,
        payload: {
          content: "test content",
          id: 1,
          date_created: "2021-02-07T19:25:24Z",
          randomId: 1,
          createdBy: {
            id: 1,
            name: "Test name"
          },
        }
      });
      expect(newState2).toEqual({
        post: {
          loadingPosts: false,
          postErrors: undefined,
          nextPage: false,
          currentPage: -1,
          pageSize: 3,
        },
        byId: {
          1: {
            content: "test content",
            id: 1,
            dateCreated: "2/7/2021",
            createdBy: {
              id: 1,
              name: "Test name"
            },
            commentsById: {},
            commentsOrder: [],
            commentsErrors: undefined,
          }
        },
        order: []
      });
    });

    it('Checking posts creation failed', () => {
      const newState3 = postReducer(undefined, {
        type: types.CREATED_POST_FAILED,
        payload: {
          randomId: 1,
        }
      });
      expect(newState3).toEqual({
        post: {
          loadingPosts: false,
          postErrors: undefined,
          nextPage: false,
          currentPage: -1,
          pageSize: 3,
        },
        byId: {},
        order: []
      });
    });

});