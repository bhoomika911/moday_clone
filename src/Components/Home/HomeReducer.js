import ACTION_TYPES from "./../../Actions/ActionsType";

const INITIAL_STATE = {
  getNewsRes: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_NEWS:
      return { ...state, getNewsRes: action.payload ,loading: true};

    case ACTION_TYPES.CLEAR_GET_NEWS:
      return { ...state, getNewsRes: "" };

    default:
      return state;
  }
};
