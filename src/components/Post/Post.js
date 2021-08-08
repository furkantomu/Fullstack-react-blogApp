import React, { useEffect } from "react";
import {
  PostCategorie,
  PostCategories,
  PostContainer,
  PostImg,
  PostInfo,
  PostTitle,
  PostDate,
  PostDesc,
} from "./post-elements";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Post = React.memo(({ item }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <PostContainer data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      {item.image ? (
        <PostImg alt="" src={item.image} />
      ) : (
        <PostImg
          alt=""
          src="https://images.pexels.com/photos/1915340/pexels-photo-1915340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      )}

      <PostInfo>
        <PostCategories>
          {item.categories.map((i, index) => {
            return <PostCategorie key={index}>{i}</PostCategorie>;
          })}
        </PostCategories>
        <Link to={`/post/${item._id}`}>
          <PostTitle>{item.title}</PostTitle>
        </Link>
        <hr />
        <PostDate>
        { item.createdAt
              ? new Date(item.createdAt).toDateString()
              : new Date().toDateString()}
        </PostDate>
      </PostInfo>
      <PostDesc>{item.desc}</PostDesc>
    </PostContainer>
  );
});

export default Post;
