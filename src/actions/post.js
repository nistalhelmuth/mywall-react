import * as types from '../types/post';
import { v4 as uuidv4 } from 'uuid';

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

export const createPost = ({
  content,
}) => ({
  type: types.CREATED_POST,
  payload: {
    content,
    randomId: uuidv4(),
  },
});

export const createPostConfirm = ({
  id,
  randomId,
  content,
  date_created,
  created_by,
}) => ({
  type: types.CREATED_POST_SUCCEEDED,
  payload: {
    id,
    content,
    date_created,
    created_by,
    randomId,
  },
});

export const createPostDecline = ({
  randomId,
  message,
}) => ({
  type: types.CREATED_POST_FAILED,
  payload: {
    message,
    randomId,
  },
});

export const deletePost = () => ({
  type: types.DELETED_POST,
  payload: {

  },
});

export const deletePostConfirm = ({
  id,
  content,
  date_created,
  created_by,
}) => ({
  type: types.DELETED_POST_SUCCEEDED,
  payload: {
    id,
    content,
    date_created,
    created_by, 
  },
});

export const deletePostDecline = ({
  message,
}) => ({
  type: types.DELETED_POST_FAILED,
  payload: {
    message
  },
});

export const fetchAllComments = ({
  postId,
}) => ({
  type: types.FETCHED_ALL_COMMENTS,
  payload: {
    postId,
  },
});

export const fetchAllCommentsConfirm = ({
  allComments,
  postId
}) => ({
  type: types.FETCHED_ALL_COMMENTS_SUCCEEDED,
  payload: {
    allComments,
    postId
  },
});

export const fetchAllCommentsDecline = ({
  message,
}) => ({
  type: types.FETCHED_ALL_COMMENTS_FAILED,
  payload: {
    message,
  },
});

export const commentPost = ({
  postId,
  content,
}) => ({
  type: types.COMMENTED_POST,
  payload: {
    postId,
    content,
  },
});

export const commentPostConfirm = () => ({
  type: types.COMMENTED_POST_SUCCEEDED,
  payload: {

  },
});

export const commentPostDecline = ({
  message,
}) => ({
  type: types.COMMENTED_POST_FAILED,
  payload: {
    message,
  },
});
