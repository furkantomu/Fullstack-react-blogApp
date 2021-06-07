import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { RiUserSettingsLine } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";
import {
  MobileBars,
  MobileClose,
  MobileIcon,
  TopCenter,
  TopContainer,
  TopImg,
  TopLeft,
  TopLeftItem,
  TopList,
  TopListItem,
  TopRight,
  TopRightItem,
  TopBarLogo,
  Dropdown,
  DropdownContent,
} from "./topbar-elements";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../actions/userAction";

const TopBar = React.memo(() => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const dispatch = useDispatch();

  const userSigninReducer = useSelector((state) => state.userSigninReducer);
  const { userInfo } = userSigninReducer;

  return (
    <TopContainer>
      <TopLeft>
        <a href="https://www.facebook.com/">
          <TopLeftItem>
            <FaFacebookSquare />
          </TopLeftItem>
        </a>
        <a href="https://twitter.com/">
          <TopLeftItem>
            <FaTwitterSquare />
          </TopLeftItem>
        </a>
        <a href="https://pinterest.com/">
          <TopLeftItem>
            <FaPinterestSquare />
          </TopLeftItem>
        </a>
        <a href="https://instagram.com/">
          <TopLeftItem>
            <FaInstagramSquare />
          </TopLeftItem>
        </a>
      </TopLeft>
      <TopCenter>
        <TopList onClick={handleClick} click={click}>
          <Link to="/">
            <TopListItem>HOME</TopListItem>
          </Link>
          <Link to="/">
            <TopListItem>ABOUT</TopListItem>
          </Link>
          <Link to="/">
            <TopListItem>CONTACT</TopListItem>
          </Link>

          <Link to="/write">
            <TopListItem>WRITE</TopListItem>
          </Link>
        </TopList>
      </TopCenter>
      <TopRight>
        <TopRightItem style={{}}>
          <Link to="/">
            <TopBarLogo />
          </Link>
        </TopRightItem>
        {userInfo ? (
          <Dropdown>
            <TopRightItem>
              <TopImg
                style={{}}
                alt=""
                src={
                  userInfo.profilePic
                    ? userInfo.profilePic
                    : "https://images.pexels.com/photos/5302784/pexels-photo-5302784.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                }
              />
            </TopRightItem>

            <DropdownContent>
              <Link to="/settings">
                <TopRightItem>
                  {userInfo.username}
                  <RiUserSettingsLine
                    style={{ fontSize: 25, paddingLeft: 5 }}
                  />
                </TopRightItem>
              </Link>
              <Link to="#signout" onClick={() => dispatch(signout())}>
                <TopRightItem style={{ opacity: 1 }}>
                  Sing Out
                  <IoLogOut style={{ fontSize: 25, paddingLeft: 10 }} />{" "}
                </TopRightItem>
              </Link>
            </DropdownContent>
          </Dropdown>
        ) : (
          <Link style={{ color: "#ccc" }} to="/login">
            <TopRightItem style={{}}>LOGIN</TopRightItem>
          </Link>
        )}

        <TopRightItem onClick={handleClick} style={{}}>
          <MobileIcon>{click ? <MobileClose /> : <MobileBars />}</MobileIcon>
        </TopRightItem>
      </TopRight>
    </TopContainer>
  );
});

export default TopBar;
