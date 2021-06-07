import styled from "styled-components";
import TextField from '@material-ui/core/TextField';

export const SettingsContainer = styled.div`
  display: flex;

  @media screen and (max-width:768px){
    flex-direction: column;
  }
`;
export const SettingsWrapper = styled.div`
  flex: 9;
  padding: 20px;
`;
export const SettingsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SettingsUpdateTitle = styled.span`
  font-size: 30px;
  margin-bottom: 20px;
  color: lightcoral;
  &:nth-child(2) {
    color: red;
    font-size: 12px;
    cursor: pointer;
  }
`;
export const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const SettingsProfilPic = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  & > img {
    width: 70px;
    height: 70px;
    border-radius: 20px;
    object-fit: cover;
  }
`;
export const SettingsFormInput = styled(TextField)`
  color: black;
  width: 30%;
  margin-top: 20px;
 

  .MuiFilledInput-root{
    margin-top: 10px;
  }
  .MuiFormLabel-root{
    padding-top: 10px;
  }
  @media screen and (max-width:768px){
    width: 100%;
  }
  
`;
export const SettingsFormButton = styled.button`
  border:none;
  align-self: flex-end;
  padding:15px 40px;
  background-color: #444;
  border-radius: 5px;
  margin-top: 10px;
  color: white;
  cursor: pointer;
  transition: .5s all;
  letter-spacing: 1.5px;

  &:hover{
    background-color: #443;
  }
  @media screen and (max-width:768px){
    width: 100%;
  }
  
`;
