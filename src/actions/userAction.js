import {
  PROFILE_DELETE_REQUEST,
  PROFILE_DELETE_SUCCESS,
  PROFILE_DELETE_FAIL,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "../constants/userConstant";
import Axios from "axios";

export const signin = (loginData) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: loginData });

  try {
    const { data } = await Axios.post("https://blog-app-node-restfulapi.herokuapp.com/api/auth/login", loginData);
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register =
  (registerData) => async (dispatch) => {
    dispatch({
      type: USER_REGISTER_REQUEST,
      payload: registerData,
    });

    try {
      const { data } = await Axios.post("/api/auth/register", registerData);
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const accountUpdate =
  (id,userData) => async (dispatch) => {
    dispatch({
      type: USER_UPDATE_REQUEST,
    });

    try {
      const { data } = await Axios.put(`/api/users/${id}`, userData);
      dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const deleteProfile = (id, username) => async (dispatch) => {
    dispatch({
      type: PROFILE_DELETE_REQUEST,
    });
    try {
      const { data} = await Axios.delete(`/api/users/${id}`, {data:username});
      dispatch({
        type: PROFILE_DELETE_SUCCESS,
        payload: data._id,
      });
    } catch (error) {
      dispatch({
        type: PROFILE_DELETE_FAIL,
        payload: error.message,
      });
    }
  };

export const signout = () => (dispatch) => {
  localStorage.removeItem("userInfo");

  dispatch({ type: USER_SIGNOUT });
};
