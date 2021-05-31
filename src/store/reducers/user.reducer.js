import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  PROFILE_FAILED,
  PROFILE_SUCCESS,
} from "../constants/user.const";

const initialState = {
  user: {},
  profile: {},
  errors: {},
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // user
    case LOGIN_SUCCESS: {
      return { ...state, user: payload };
    }
    case LOGIN_FAILED: {
      return { ...state, errors: payload };
    }
    // profile
    case PROFILE_SUCCESS: {
      return { ...state, profile: payload };
    }
    case PROFILE_FAILED: {
      return { ...state, errors: payload };
    }
    default:
      return state;
  }
};

export default userReducer;
