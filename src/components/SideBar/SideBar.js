import React, { useEffect } from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import {
  SideBarContainer,
  SideBarItem,
  SideBarTitle,
  SideBarList,
  SideBarListItem,
  SideBarSocial,
} from "./sidebar-elements";
import { Link } from "react-router-dom";
import SideBarLast from "../SideBarLast/SideBarLast";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryList } from "../../actions/categoryAction";

const SideBar = React.memo((props) => {

  const stateCategory = useSelector((state) => state.categoryReducer);
  const { category } = stateCategory;


  return (
    <SideBarContainer>
      <SideBarItem>
        <SideBarTitle>Last Posts</SideBarTitle>
        <SideBarLast />
      </SideBarItem>
      <SideBarItem>
        <SideBarTitle>TAGS</SideBarTitle>
        <SideBarList>
          {category &&
            category.map((item, index) => {
              return (
                <Link key={index} to={`/?category=${item.name}`}>
                  <SideBarListItem
                    onClick={(e) =>
                      props.setChangeCategory &&
                      props.setChangeCategory(e.target.innerHTML)
                    }
                  >
                    {item.name}
                  </SideBarListItem>
                </Link>
              );
            })}
        </SideBarList>
      </SideBarItem>
      <SideBarItem>
        <SideBarTitle>SOCIAL</SideBarTitle>
        <SideBarSocial>
          <FaFacebookSquare
            style={{
              fontSize: 18,
              marginLeft: 10,
              cursor: "pointer",
            }}
          />
          <FaTwitterSquare
            style={{
              fontSize: 18,
              marginLeft: 10,
              cursor: "pointer",
            }}
          />
          <FaPinterestSquare
            style={{
              fontSize: 18,
              marginLeft: 10,
              cursor: "pointer",
            }}
          />
          <FaInstagramSquare
            style={{
              fontSize: 18,
              marginLeft: 10,
              cursor: "pointer",
            }}
          />
        </SideBarSocial>
      </SideBarItem>
    </SideBarContainer>
  );
});

export default SideBar;
