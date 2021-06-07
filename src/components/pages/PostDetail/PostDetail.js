import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPost } from "../../../actions/postsAction";
import SideBar from "../../SideBar/SideBar";
import SinglePost from "../../SinglePost/SinglePost";
import { PostDetailContainer } from "./postdetail-elements.";

const PostDetail = (props) => {
  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const postId = props.location.pathname.split("/")[2];

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(getPost(postId));
    }

    return () => (mounted = false);
    // eslint-disable-next-line
  }, [postId]);
  return (
    <PostDetailContainer>
      <SinglePost redirect={redirect} postId={postId} />
      <SideBar />
    </PostDetailContainer>
  );
};

export default PostDetail;
