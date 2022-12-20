import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  DELETE_ELEMENT,
  ADD_ELEMENT,
  UPDATE_ELEMENT,
} from "./types";

export const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_DATA_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.error.message,
      };
    case DELETE_ELEMENT:
      return {
        loading: false,
        data: (() => {
          let items = [...state.data];
          items.splice(action.payload, 1);
          return items;
        })(),
        error: "",
      };
    case ADD_ELEMENT:
      return {
        loading: false,
        data: [action.payload, ...state.data],
        error: "",
      };

    case UPDATE_ELEMENT:
      return {
        loading: false,
        data: (() => {
          let items = [...state.data];
          items[action.payload.index] = action.payload.item;
          return items;
        })(),
        error: "",
      };
    default:
      return state;
  }
};
