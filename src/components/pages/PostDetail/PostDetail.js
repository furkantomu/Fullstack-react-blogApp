import React from "react";
import SideBar from "../../SideBar/SideBar";
import SinglePost from "../../SinglePost/SinglePost";
import { PostDetailContainer } from "./postdetail-elements.";

const PostDetail = (props) => {

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const postId = props.location.pathname.split("/")[2];
  return (
    <PostDetailContainer>
      <SinglePost redirect={redirect} postId={postId} />
      <SideBar />
    </PostDetailContainer>
  );
};

export default PostDetail;
