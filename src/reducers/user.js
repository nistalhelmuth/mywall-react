import * as userTypes from '../types/user';

const genreDict = {
  M: 'Male',
  F: 'Female',
}

export const defaultUserState = {
  profileId: undefined,
  email: undefined,
  name: undefined,
  city: undefined,
  genre: undefined,
  dateCreated: undefined,
  loading: false,
  registerErrors: {
    email: undefined,
    name: undefined,
    city: undefined,
    genre: undefined,
    password: undefined,
    other: undefined,
  },
};

const user = (state = defaultUserState, action) => {
  switch (action.type) {
    case userTypes.USER_REGISTERED: {
      return {
        ...state,
        loading: true,
      }
    }
    case userTypes.USER_LOGED_IN_FAILED: 
    case userTypes.USER_REGISTERED_FAILED: {
      const {
        payload: {
          message
        } 
      } = action;
      return {
        ...state,
        loading: false,
        registerErrors: message,
      }
    }
    case userTypes.FETCHED_USER_PROFILE_SUCCEEDED: {
      const {
        payload: {
          profileId,
          email,
          name,
          city,
          genre,
          dateCreated,
        }
      } = action;
      const date = new Date(dateCreated);
      return {
        profileId,
        email,
        name,
        city,
        genre: genreDict[genre],
        loading: false,
        dateCreated: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
      }
    }
    default: {
      return {
        ...state,
        loading: false,
        registerErrors: defaultUserState.registerErrors,
      }
    }
  }
}

export default user;

//selectores
export const getUserErrors = (state) => state.registerErrors;
export const getUserLoading = (state) => state.loading;
export const getUserInformation = (state) => state;

