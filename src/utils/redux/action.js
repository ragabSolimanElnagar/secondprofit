import axios from "axios";
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  DELETE_ELEMENT,
  ADD_ELEMENT,
  UPDATE_ELEMENT,
} from "./types";

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    error: error.message,
  };
};

export const deleteElement = (index) => {
  return {
    type: DELETE_ELEMENT,
    payload: index,
  };
};

export const addElement = (data) => {
  return {
    type: ADD_ELEMENT,
    payload: data,
  };
};

export const updateElement = (item,index) => {
  return {
    type: UPDATE_ELEMENT,
    payload:{
      item,
      index
    }
  };
};

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get("https://api.publicapis.org/entries")
      .then((response) => {
        const data = response.data.entries;
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error));
      });
  };
};
