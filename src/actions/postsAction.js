import Axios from "axios";
import {
  POSTS_LIST_FAIL,
  POSTS_LIST_REQUEST,
  POSTS_LIST_SUCCESS,
  POST_ADD_FAIL,
  POST_ADD_REQUEST,
  POST_ADD_SUCCESS,
  POST_DELETE_FAIL,
  POST_DELETE_REQUEST,
  POST_DELETE_SUCCESS,
  POST_UPDATE_FAIL,
  POST_UPDATE_REQUEST,
  POST_UPDATE_SUCCESS,
} from "../constants/postConstants";

export const getPosts = (search) => async (dispatch) => {
  dispatch({
    type: POSTS_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      `${search ? "/api/posts?category=" + search : "/api/posts"}`
    );
    dispatch({
      type: POSTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POSTS_LIST_FAIL,
      payload: error.message,
    });
  }
};


export const addPost = (newPost) => async (dispatch) => {
  dispatch({
    type: POST_ADD_REQUEST,
  });
  try {
    const { data } = await Axios.post("/api/posts", newPost);
    dispatch({
      type: POST_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_ADD_FAIL,
      payload: error.message,
    });
  }
};

export const deletePost = (id, deletedPost) => async (dispatch) => {
  dispatch({
    type: POST_DELETE_REQUEST,
  });
  try {
    const { data} = await Axios.delete(`/api/posts/${id}`, deletedPost);
    dispatch({
      type: POST_DELETE_SUCCESS,
      payload: {data,id},
    });
  } catch (error) {
    dispatch({
      type: POST_DELETE_FAIL,
      payload: error.message,
    });
  }
};

export const updatePost = (id,update) => async (dispatch) => {
  dispatch({
    type: POST_UPDATE_REQUEST,
  });
  try {
    const { data } = await Axios.put(`/api/posts/${id}`, update);
    dispatch({
      type: POST_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_UPDATE_FAIL,
      payload: error.message,
    });
  }
};


