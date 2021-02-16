import * as types from '../types/post';
import { v4 as uuidv4 } from 'uuid';

export const fetchAllPosts = ({
  profileId,
  clean,
}) => ({
  type: types.FETCHED_ALL_POSTS,
  payload: {
    profileId,
    clean,
  },
});

export const fetchAllPostsConfirm = ({
  allPosts,
  currentPage,
  nextPage,
}) => ({
  type: types.FETCHED_ALL_POSTS_SUCCEEDED,
  payload: {
    allPosts,
    currentPage,
    nextPage,
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
  createdBy,
}) => ({
  type: types.CREATED_POST_SUCCEEDED,
  payload: {
    id,
    content,
    date_created,
    createdBy,
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
  createdBy,
}) => ({
  type: types.DELETED_POST_SUCCEEDED,
  payload: {
    id,
    content,
    date_created,
    createdBy, 
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
  postId,
  message,
}) => ({
  type: types.FETCHED_ALL_COMMENTS_FAILED,
  payload: {
    message,
    postId,
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
    randomId: uuidv4(),
  },
});

export const commentPostConfirm = ({
  postId,
  randomId,
  content,
  createdBy,
  dateCreated,
}) => ({
  type: types.COMMENTED_POST_SUCCEEDED,
  payload: {
    postId,
    content,
    randomId,
    createdBy,
    dateCreated,
  },
});

export const commentPostDecline = ({
  postId,
  randomId,
  message,
}) => ({
  type: types.COMMENTED_POST_FAILED,
  payload: {
    postId,
    randomId,
    message,
  },
});
