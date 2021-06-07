import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';


export const WriteContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 20px;

  @media screen and (max-width: 768px) {
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;
export const WriteForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WriteFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    
    width: 40%;

    @media screen and (max-width:768px){
      width: 100%;
    }

    input {
      margin-top: 10px;
      width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    width: 100%;
  }
`;
export const FormInput = styled(TextField)`
  font-family: "Varela Round", sans-serif;
  

  .MuiInputBase-root {
    margin-top: 30px;
    color: black;
    width: 100%;
    font-family: "Josefin Sans";
  }

  .MuiFormLabel-root {
    color: #ccc;
    padding-top: 20px;
    font-family: "Josefin Sans";
  }

  @media screen and (max-width: 768px) {
    
    width: 84%;
  }
`;
export const FormTextArea = styled.textarea`
  font-size: 20px;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  font-family: "Varela Round", sans-serif;
  max-width: 77%;
  height: 40vh;
  min-width: 80%;
  border-radius: 4px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    padding: 10px;
    min-width: 94%;
    padding: 5px 10px;
  }

  &:focus {
    outline: none;
    border-color: blue;
  }
`;

export const FormButton = styled(Button)`
  
  
  border-radius: 5px;
  
  width: 20%;
  align-self:center;
  cursor: pointer;
  margin-left: 150px;

  @media screen and (max-width: 768px) {
    margin-left: 10px;
    margin-top: 10px;
    width: 95%;
  }
`;

export const WriteImg = styled.img`
  margin-left: 150px;
  width: 70vw;
  height: 250px;
  border-radius: 7px;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    margin: 0;
    width: 100%;
  }
`;

export const WriteSelectTags = styled.div`
  margin-left: 150px;
  display: flex;
  flex-wrap: wrap;
  width: 260px;
  margin-top: 25px;

  span {
    margin: 0 30px 5px 0;
    cursor: pointer;
    background-color: #ccc;
    padding: 4px 5px;
    border-radius: 4px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 10px 0 10px 10px;
  }
`;

export const SelectedTags = styled.div`
  background-color: burlywood;
  margin: 20px 5px 0 150px;
  height: 40px;
  padding-left: 5px;
  width: 80%;
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-radius: 10px;
  justify-content: center;

  span {
    margin-right: 10px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    @media screen and (max-width: 768px) {
      padding: 10px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 10px 0 10px 10px;
    flex-wrap: wrap;
    height: auto;
  }
`;
