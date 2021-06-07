import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const SinglePostContainer = styled.div`
  flex: 9;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
  }
`;
export const SinglePostWrapper = styled.div`
  padding: 20px;

  padding-right: 0;
  @media screen and (max-width: 768px) {
    padding: 5px 5px;
  }
`;
export const SinglePostImg = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  object-fit: cover;
`;
export const SinglePostTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100%;

  h1 {
    text-align: center;
    font-family: "Lora", serif;
    font-size: 28px;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
export const SinglePostEdit = styled.div`
  float: right;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    margin-top: 45px;
    font-size: 25px;
  }
`;
export const SinglePostInfo = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 16px;
  color: #b39656;
  font-family: "Vareda Round", sans-serif;
  @media screen and (max-width: 768px) {
    padding-left: 15px;
  }
`;
export const SinglePostAuthor = styled.span`
  @media screen and (max-width: 768px) {
  }
`;
export const SinglePostDate = styled.span``;

export const SinglePostDesc = styled.p`
  color: #666;
  font-size: 18px;
  line-height: 1.5;
  white-space: pre-wrap;

  &::first-letter {
    margin-left: 20px;
    font-size: 30px;
    font-weight: 600;
  }

  @media screen and (max-width: 768px) {
    padding: 0 5px;
  }
`;

export const UpdateInput = styled.input`
  font-size: 17px;
  padding: 10px;
  border: none;
  font-family: "Varela Round", sans-serif;
  width: 50vw;
  transition: 0.8s;
  border-bottom: 1px solid #ccc;
  &:focus {
    outline: none;
    border-color: blue;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    width: 84%;
  }
`;
export const UpdateTextArea = styled.textarea`
  font-size: 20px;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  font-family: "Varela Round", sans-serif;
  max-width: 100%;
  width: 100%;
  height: 40vh;
  min-width: 70%;

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

export const UpdateButton = styled(Button)`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
