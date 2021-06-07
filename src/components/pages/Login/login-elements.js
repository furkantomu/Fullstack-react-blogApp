import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export const LoginContainer = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("https://images.pexels.com/photos/261577/pexels-photo-261577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
`;
export const LoginForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background: rgba(20, 20, 20, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 90px 100px;
  position: relative;

  @media screen and (max-width: 768px) {
    margin-top: 0;
    padding: 105px 20px;
    width: 80%;
  }
`;
export const LoginInput = styled(TextField)`
  font-family: "Josefin Sans";
  width: 100%;

  .MuiInputBase-root {
    margin-top: 30px;
    color: white;
    font-family: "Josefin Sans";
  }

  .MuiFormLabel-root {
    color: #ccc;
    padding-top: 20px;
    font-family: "Josefin Sans";
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const LoginButton = styled.button`
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 35%;
  width: 35%;
  height: 40px;
  max-height: 40px;
  position: absolute;
  font-family: "Josefin Sans";
  right: 20px;
  bottom: 15px;
  padding: 10px 10px;
  background: transparent;
  color: white;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: 0.4s;

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  &:hover {
    opacity: 0.8;
  }
`;
export const LoginLogo = styled.div`
  position: absolute;
  z-index: 99;
  left: 40%;

  top: -50px;
  @media screen and (max-width: 768px) {
    left: 35%;
  }
`;
export const FormItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
