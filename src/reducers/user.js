import { combineReducers } from 'redux';
import * as userTypes from '../types/user';

const feelingsDict = {
  H: 'Happy',
  A: 'Angry',
  S: 'Sad',
  M: 'Motivated',
  B: 'Bored',
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
};

const user = (state = defaultUserState, action) => {
  switch (action.type) {
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
        genre: genre === "M" ? "Male" : "Female",
        feeling: feelingsDict[feeling],
        dateCreated: `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`,
      }
    }
    default: {
      return state;
    }
  }
}

const byId = (state={}, action) => {
  switch (action.type) {
    
    default: {
      return state;
    }
  }
}

const order = (state=[], action) => {
  switch (action.type) {
    
    default: {
      return state;
    }
  }
}

export default combineReducers({
  user,
  byId,
  order
})

//selectores
export const getUserInformation = (state) => state.user;

