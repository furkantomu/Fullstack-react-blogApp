import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { getCategoryList } from "../../../actions/categoryAction";
import { getPosts } from "../../../actions/postsAction";
import Header from "../../Header/Header";
import Posts from "../../Posts/Posts";
import SideBar from "../../SideBar/SideBar";
import { HomeContainer } from "./home-elements";
import axios from "axios";

const Home = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();


  const [changeCategory, setChangeCategory] = useState("");


  const state = useSelector((state) => state.postsReducer);
  const { posts, error } = state;
  
  useEffect(() => {
    if(search){
      dispatch(getPosts(changeCategory));
    }else{
      setChangeCategory((changeCategory) => (changeCategory = ""));
    }
    // eslint-disable-next-line
  }, [dispatch,search]);



  


  return (
    <>
      <Header changeCategory={changeCategory} />
      <HomeContainer>
        <Posts error={error} posts={posts}/>
        <SideBar setChangeCategory={setChangeCategory} />
      </HomeContainer>
    </>
  );
};

export default Home;
