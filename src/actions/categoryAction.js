import Axios from 'axios';
import { CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS } from '../constants/categoryConstant';


export const getCategoryList = () => async (dispatch) =>{
  dispatch({
    type:CATEGORY_LIST_REQUEST,
  });
  try {
    const {data} = await Axios.get('/api/category');
    dispatch({
      type:CATEGORY_LIST_SUCCESS,
      payload:data
    });
  } catch (error) {
    dispatch({
      type:CATEGORY_LIST_FAIL,
      payload:error.message
    });
  }
}