import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const RegisterContainer = styled.div`
  height: 100vh;
  display: flex;
  padding-bottom: 50px;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("https://images.pexels.com/photos/261510/pexels-photo-261510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
`;
export const RegisterForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background: rgba(20, 20, 20, 0.7);
  backdrop-filter: blur(20px);
  border-radius: 10px;
  padding: 90px 100px;
  position: relative;
  @media screen and (max-width: 768px) {
    margin-top: 130px;
    padding: 105px 20px;
    width: 90%;
    
  }
`;
export const RegisterInput = styled(TextField)`
  font-family:'Josefin Sans';
  width: 100%;
  
  .MuiInputBase-root{
    margin-top: 30px;
    color: white;
    font-family:'Josefin Sans';
  }
  
  .MuiFormLabel-root{
    color: #ccc;
    padding-top: 20px;
    font-family:'Josefin Sans';
  }
  @media screen and (max-width:768px){
    width: 100%;
  }
  
`;
export const RegisterButton = styled.button`
  border:1px solid #ccc;
  font-family:'Josefin Sans';
  border-radius: 5px;
  width: 35%;
  position: absolute;
  right: 20px;
  bottom:15px;
  padding: 10px;
  background:transparent;
  color: white;
  font-size: .8rem;
  letter-spacing: .5px;
  cursor: pointer;
  transition: .4s;

  @media screen and (max-width: 768px) {
    width:90%;
  }

  &:hover{
    opacity: .8;
  }
`;
export const RegisterLogo = styled.div`
  position: absolute;
  z-index: 99;
  left: 40%;
  top: -50px;
  @media screen and (max-width: 768px) {
    left: 36%;
  }

`;
export const FormItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;