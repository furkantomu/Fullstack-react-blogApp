import styled from "styled-components";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";

export const TopContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  position: sticky;
  background-color: #080810;
  border-top: 1px solid #212128;
  border-bottom: 1px solid #212128;
  top: 0;
  z-index: 999;
  -webkit-box-shadow: -1px 7px 18px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 7px 18px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 7px 18px 0px rgba(0, 0, 0, 0.75);
`;

export const TopLeft = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex: 1;
  a{
    height: 100%;
  }
`;
export const TopLeftItem = styled.div`
  padding: 0 12px;
  height: 100%;
  align-items: center;
  display: flex;
  border-left: 1px solid #3a3a43;
  color: #ccc;
  cursor: pointer;
  font-size: 1.3rem;
  transition: 0.2s ease-in;

  @media screen and (max-width: 768px) {
    display: none;
    &:nth-child(3) {
      display: flex;
      &:hover {
        background: #1877f2;
      }
    }
  }

  &:nth-child(1) {
    &:hover {
      background: #1877f2;
    }
  }
  &:nth-child(2) {
    &:hover {
      background: #1da1f2;
    }
  }
  &:nth-child(3) {
    &:hover {
      background: #c8232c;
    }
  }
  &:nth-child(4) {
    &:hover {
      background: linear-gradient(
        45deg,
        #405de6,
        #5851db,
        #833ab4,
        #c13584,
        #e1306c,
        #fd1d1d
      );
      color: white;
    }
  }
`;
export const TopCenter = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex: 8;
`;
export const TopRight = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-child(2) {
      font-size: 1.3rem;

      &:hover {
        background: linear-gradient(
          to right,
          rgb(236, 0, 140),
          rgb(252, 103, 103)
        );
        color: white;
      }
    }
  }
`;

export const TopRightItem = styled.div`
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  border-left: 1px solid #3a3a43;
  color: #ccc;
  opacity: 0.8;
  cursor: pointer;

  &:nth-child(1) {
    font-size: 1.3rem;

    &:hover {
      background: linear-gradient(
        to right,
        rgb(236, 0, 140),
        rgb(252, 103, 103)
      );
      color: white;
    }

    @media screen and (max-width: 768px) {
      border: none;
    }
  }

  &:nth-child(3) {
    display: none;

    @media screen and (max-width: 768px) {
      display: flex;
      font-size: 1.5rem;
      justify-content: center;
      align-items: center;
      &:hover {
        background: linear-gradient(
          to right,
          rgb(236, 0, 140),
          rgb(252, 103, 103)
        );
        color: white;
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;

    &:nth-child(3) {
      font-size: 2rem;
    }
  }
`;
export const TopList = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  a {
    color: #ccc;
    opacity: 0.8;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    height: 100%;
    transition: 0.4s ease-in-out;

    &:nth-child(1) {
      &:hover {
        background: -webkit-gradient(
            radial,
            204 23,
            0,
            204 23,
            300,
            from(rgb(197, 45, 73)),
            to(rgb(138, 59, 211))
          ),
          rgb(138, 59, 211);
      }
    }
    &:nth-child(2) {
      &:hover {
        background: -webkit-gradient(
            radial,
            230.163 23,
            0,
            230.163 23,
            300,
            from(rgb(68, 230, 163)),
            to(rgb(68, 200, 230))
          ),
          rgb(68, 200, 230);
      }
    }
    &:nth-child(3) {
      &:hover {
        background: -webkit-gradient(
            radial,
            112.325 23,
            0,
            112.325 23,
            300,
            from(rgb(227, 208, 132)),
            to(rgb(175, 115, 42))
          ),
          rgb(175, 115, 42);
      }
    }
    &:nth-child(4) {
      &:hover {
        background: -webkit-gradient(
            radial,
            104.487 23,
            0,
            104.487 23,
            300,
            from(rgb(105, 93, 175)),
            to(rgb(90, 174, 202))
          ),
          rgb(90, 174, 202);
      }
    }
  }

  @media screen and (max-width: 768px) {
    transition: 0.4s ease-in-out;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 48px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    background-color: #101522;
    z-index: 99999;

    a {
      height: 60px;
    }
  }
`;
export const TopListItem = styled.li`
  list-style: none;
  padding: 0 110px;
  height: 100%;
  align-items: center;
  display: flex;
  border-left: 1px solid #3a3a43;
  cursor: pointer;
  transition: ease-in-out 1s;

  @media screen and (max-width: 768px) {
    padding: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
    display: flex;
    border-bottom: 1px solid #3a3a43;
    cursor: pointer;
    transition: ease-in-out 1s;
  }
`;
export const TopBarLogo = styled(FaBlogger)`
  font-size: 1.8rem;
`;
export const TopImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
export const MobileIcon = styled.div``;
export const MobileBars = styled(AiOutlineAlignRight)``;
export const MobileClose = styled(AiOutlineClose)``;

export const Dropdown = styled.div`
  position: relative;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  border-left: 1px solid #3a3a43;
  color: #ccc;
  cursor: pointer;


  &:hover ul {
    display: block;
    margin-top: 185px;
    
    
    @media screen and (max-width: 768px) {
      margin-top: 94px;
    }
  }
`;
export const DropdownContent = styled.ul`
  position: absolute;
  display: none;
  right: 0;
  min-width: 12rem;
  padding: 1.1rem;
  z-index: 1;
  background-color: #080810;
  margin: 0;
  border-radius: 5px;

  a{
    border-bottom: 1px solid #ccc;
    height: 50px;
    align-items:flex-start;

  }
`;

