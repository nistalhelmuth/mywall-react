import * as types from '../types/post';

export const fetchAllPosts = ({
  profileId
}) => ({
  type: types.FETCHED_ALL_POSTS,
  payload: {
    profileId,
  },
});

export const fetchAllPostsConfirm = ({
  allPosts
}) => ({
  type: types.FETCHED_ALL_POSTS_SUCCEEDED,
  payload: {
    allPosts
  },
});

export const fetchAllPostsDecline = ({
  message,
}) => ({
  type: types.FETCHED_ALL_POSTS_FAILED,
  payload: {
    message,
  },
});

export const createPost = () => ({
  type: types.CREATED_POST,
  payload: {

  },
});

export const createPostConfirm = () => ({
  type: types.CREATED_POST_SUCCEEDED,
  payload: {

  },
});

export const createPostDecline = () => ({
  type: types.CREATED_POST_FAILED,
  payload: {

  },
});

export const deletePost = () => ({
  type: types.DELETED_POST,
  payload: {

  },
});

export const deletePostConfirm = () => ({
  type: types.DELETED_POST_SUCCEEDED,
  payload: {

  },
});

export const deletePostDecline = () => ({
  type: types.DELETED_POST_FAILED,
  payload: {

  },
});

export const commentPost = () => ({
  type: types.COMMENTED_POST,
  payload: {

  },
});

export const commentPostConfirm = () => ({
  type: types.COMMENTED_POST_SUCCEEDED,
  payload: {

  },
});

export const commentPostDecline = () => ({
  type: types.COMMENTED_POST_FAILED,
  payload: {

  },
});
