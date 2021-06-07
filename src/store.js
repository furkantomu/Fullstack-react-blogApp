import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { categoryReducer } from "./reducers/categoryReducer";
import {
  postsReducer,
} from "./reducers/postsReducer";
import { userRegisterReducer, userSigninReducer, userUpdateReducer } from "./reducers/userReducer";


const initialState = {
  userSigninReducer: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
}


const reducer = combineReducers({
  postsReducer,
  categoryReducer,
  userRegisterReducer,
  userSigninReducer,
  userUpdateReducer,
});




const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
