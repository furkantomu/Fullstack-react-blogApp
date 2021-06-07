import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import {  IoLockClosed } from "react-icons/io5";
import {
  LoginContainer,
  LoginForm,
  LoginLogo,
  LoginInput,
  LoginButton,
  FormItem,
} from "./login-elements";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../../actions/userAction";
import LoadingBox from "../../LoadingBox";
import ErrorBox from "../../ErrorBox";
import InputAdornment from '@material-ui/core/InputAdornment';


const Login = (props) => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const userSigninReducer = useSelector((state) => state.userSigninReducer);
  const { userInfo, loading, error } = userSigninReducer;
  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";


  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo,error]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(signin(loginData));
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleClick}>
        {error ? (
          <ErrorBox severity="error">
            {error}
          </ErrorBox>
        ) : (
          ""
        )}
        <LoginLogo>
          <FaUserCircle style={{ fontSize: 100, color: "#ccc" }} />
        </LoginLogo>
        <FormItem>
          <LoginInput
            onChange={(e) =>
              setLoginData({ ...loginData, username: e.target.value })
            }
            required
            type="text"
            label="Username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaUserCircle style={{fontSize:22,color:"#ccc"}}/>
                </InputAdornment>
              ),
            }}
          />
        </FormItem>
        <FormItem>
          
          <LoginInput
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
            required
            type="password"
            label="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IoLockClosed style={{ fontSize: 24, color: "#ccc" }} />
                </InputAdornment>
              ),
            }}
          />
        </FormItem>
        <p
          style={{
            fontSize: 13,
            marginTop:10,
            display: "flex",
            justifyContent: "",
            color: "#ccc",
            paddingLeft: 5,
            fontFamily: "Josefin Sans",
          }}
        >
          New customer?
          <span
            style={{
              paddingLeft: 5,
              textDecoration: "underline",
              cursor: "pointer",
              color: "#ccc",
            }}
          >
            <Link to="/register">Create your account</Link>
          </span>
        </p>
        <LoginButton type="submit">
          {loading ? <LoadingBox /> : <span>Login</span>}
        </LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
