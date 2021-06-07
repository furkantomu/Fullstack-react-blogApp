import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import {
  IoPersonAddSharp,
  IoPerson,
  IoMail,
  IoLockClosed,
} from "react-icons/io5";
import {
  RegisterContainer,
  RegisterLogo,
  RegisterForm,
  FormItem,
  RegisterInput,
  RegisterButton,
} from "./register-elements";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../actions/userAction";
import LoadingBox from "../../LoadingBox";
import ErrorBox from "../../ErrorBox";
import InputAdornment from '@material-ui/core/InputAdornment';


const Register = (props) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerData, setRegisterData] = useState({
    username: "",
    name: "",
    surname: "",
    email: "",
    password:""
  });

  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userRegisterReducer = useSelector(state => state.userRegisterReducer);
  const {userInfo,error,loading} = userRegisterReducer; 

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (registerData.password !== confirmPassword) {
      alert("Password and confirm password are not match");
    } else {
      dispatch(register(registerData));
    }
  };

  return (
    <RegisterContainer>
      <RegisterForm onSubmit={submitHandler}>
      {error ? (
          <ErrorBox severity="warning">
            {error}
          </ErrorBox>
        ) : (
          ""
        )}
        <RegisterLogo>
          <FaUserCircle style={{ fontSize: 100, color: "#ccc" }} />
        </RegisterLogo>
        <FormItem>
          <RegisterInput
            onChange={(e) =>
              setRegisterData({ ...registerData, username: e.target.value })
            }
            required
            type="text"
            label="Username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IoPersonAddSharp style={{fontSize:22,color:"#ccc"}}/>
                </InputAdornment>
              ),
            }}
          />
        </FormItem>
        <FormItem>
          <RegisterInput
            onChange={(e) =>
              setRegisterData({ ...registerData, name: e.target.value })
            }
            required
            type="text"
            label="Name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IoPerson style={{fontSize:23,color:"#ccc"}}/>
                </InputAdornment>
              ),
            }}
          />
        </FormItem>
        <FormItem>
          <RegisterInput
            onChange={(e) =>
              setRegisterData({ ...registerData, surname: e.target.value })
            }
            required
            type="text"
            label="Surname"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IoPerson style={{fontSize:23,color:"#ccc"}}/>
                </InputAdornment>
              ),
            }}
          />
        </FormItem>
        <FormItem>
          <RegisterInput
            onChange={(e) =>
              setRegisterData({ ...registerData, email: e.target.value })
            }
            required
            type="email"
            label="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IoMail style={{fontSize:23,color:"#ccc"}}/>
                </InputAdornment>
              ),
            }}
            
          />
        </FormItem>
        <FormItem>
          <RegisterInput
            onChange={(e) =>
              setRegisterData({ ...registerData, password: e.target.value })
            }
            required
            type="password"
            label="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IoLockClosed style={{fontSize:23,color:"#ccc"}}/>
                </InputAdornment>
              ),
            }}
          />
        </FormItem>
        <FormItem>
          <RegisterInput
            required
            type="password"
            label="Confirm Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IoLockClosed style={{fontSize:23,color:"#ccc"}}/>
                </InputAdornment>
              ),
            }}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormItem>

        <p
          style={{
            fontSize: 13,
            display: "flex",
            justifyContent: "",
            color: "#ccc",
            paddingLeft: 5,
            marginTop:15,
            fontFamily: "Josefin Sans",
          }}
        >
          Already have an acoount?
          <span
            style={{
              color: "#ccc",
              paddingLeft: 5,

              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            <Link to="/login">Sign In</Link>
          </span>
        </p>
        <RegisterButton type="submit">
        {loading ? <LoadingBox/>  : <span>Register</span>}
          </RegisterButton>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
