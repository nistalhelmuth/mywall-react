import * as userTypes from '../types/user';

const feelingsDict = {
  H: 'Happy',
  A: 'Angry',
  S: 'Sad',
  M: 'Motivated',
  B: 'Bored',
}
const genreDict = {
  M: 'Male',
  F: 'Female',
}

const defaultUserState = {
  profileId: undefined,
  email: undefined,
  name: undefined,
  city: undefined,
  visitors: undefined,
  genre: undefined,
  dateCreated: undefined,
  loading: undefined,
  registerErrors: undefined,
};

const user = (state = defaultUserState, action) => {
  switch (action.type) {
    case userTypes.USER_LOGED_IN_FAILED: 
    case userTypes.USER_REGISTERED_FAILED: {
      const {
        payload: {
          error
        } 
      } = action;
      return {
        ...state,
        registerErrors: error,
      }
    }
    case userTypes.FETCHED_USER_PROFILE_SUCCEEDED: {
      const {
        payload: {
          profileId,
          email,
          name,
          city,
          visitors,
          genre,
          feeling,
          dateCreated,
        }
      } = action;
      const date = new Date(dateCreated);
      return {
        profileId,
        email,
        name,
        city,
        visitors,
        genre: genreDict[genre],
        feeling: feelingsDict[feeling],
        dateCreated: `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`,
      }
    }
    default: {
      return state;
    }
  }
}

export default user;

//selectores
export const getUserErrors = (state) => state.registerErrors;
export const getUserInformation = (state) => state;

