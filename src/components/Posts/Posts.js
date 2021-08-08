import React from "react";
import Post from "../Post/Post";
import { PostsContainer } from "./posts-elements";





const Posts = React.memo((props) => {



  const { posts,error,loading } = props;
  
  return (
    <PostsContainer>
      
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        posts && posts.map((item, index) => {
          return  <Post key={index} item={item}  />;
        })
        
      )}
      
    </PostsContainer>
  );
});

export default Posts;
