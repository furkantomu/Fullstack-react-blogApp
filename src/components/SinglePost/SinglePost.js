import React, { useCallback, useEffect, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { BiImageAdd } from "react-icons/bi";
import {
  SinglePostContainer,
  SinglePostWrapper,
  SinglePostImg,
  SinglePostTitle,
  SinglePostEdit,
  SinglePostInfo,
  SinglePostAuthor,
  SinglePostDate,
  SinglePostDesc,
  UpdateInput,
  UpdateTextArea,
  UpdateButton,
} from "./singlepost-elements";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPost, getPosts, updatePost } from "../../actions/postsAction";
import LoadingProgress from "../LoadingProgress";
import ErrorBox from "../ErrorBox";
import FileBase from "react-file-base64";
import SaveIcon from "@material-ui/icons/Save";

const SinglePost = React.memo((props) => {
  const [updateMode, setUpdateMode] = useState(false);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const history = useHistory();

  const postsReducer = useSelector((state) => state.postsReducer);
  const { singlePost, loading } = postsReducer;

  const userSigninReducer = useSelector((state) => state.userSigninReducer);
  const { userInfo } = userSigninReducer;

  const dispatch = useDispatch();

  const postDeleted = useCallback(() => {
    const deletedPost = {
      username: singlePost.username,
    };
    dispatch(deletePost(props.postId, deletedPost));
    setTimeout(()=>{
      history.push(props.redirect);
      dispatch(getPosts())
    },5000);
  }, [dispatch, singlePost, props,history]);



  const updateModeChange = useCallback(() => {
    setUpdateMode((updateMode) => !updateMode);
    setTitle((title) => (title = singlePost.title));
    setDesc((desc) => (desc = singlePost.desc));
  }, [singlePost]);

  const setPost = useCallback(
    async (e) => {
      e.preventDefault();
      const update = {
        username: userInfo.username,
        title,
        desc,
      };
      if (file) {
        update.image = file;
      }

      dispatch(updatePost(props.postId, update));
      setUpdateMode(false);
    },
    [userInfo, file, title, desc, dispatch, props]
  );
  return (
    <SinglePostContainer>
      {loading ? (
        <LoadingProgress />
      ) : (
        <SinglePostWrapper>
          {!singlePost && (
            <ErrorBox severity="info">Post has been deleted</ErrorBox>
          )}
          {updateMode && file ? (
            <SinglePostImg alt="" src={file} />
          ) : singlePost && singlePost.image ? (
            <SinglePostImg alt="" src={singlePost.image} />
          ) : (
            <SinglePostImg
              alt=""
              src="https://images.pexels.com/photos/1915340/pexels-photo-1915340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
          )}
          {updateMode && (
            <div>
              <label htmlFor="fileInput">
                <BiImageAdd
                  style={{
                    fontSize: 35,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                />
              </label>
              <div>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setFile(base64)}
                />
              </div>
            </div>
          )}
          <SinglePostTitle>
            {updateMode ? (
              <UpdateInput
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            ) : (
              <h1>{singlePost && singlePost.title}</h1>
            )}
          </SinglePostTitle>
          {userInfo && singlePost && (
            userInfo.username === singlePost.username ? (
              <SinglePostEdit>
              <FiEdit
                style={{ marginLeft: 10, cursor: "pointer", color: "teal" }}
                onClick={updateModeChange}
              />
              <FiTrash2
                style={{ marginLeft: 10, cursor: "pointer", color: "tomato" }}
                onClick={postDeleted}
              />
            </SinglePostEdit>
            ):"")}

          <SinglePostInfo>
            <SinglePostDate>
              {singlePost && new Date(singlePost.createdAt).toDateString()}
            </SinglePostDate>
            <SinglePostAuthor>
              Author:{" "}
              <Link to={`/?user=${singlePost && singlePost.username}`}>
                {singlePost && singlePost.username}
              </Link>
            </SinglePostAuthor>
          </SinglePostInfo>
          {updateMode ? (
            <UpdateTextArea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          ) : (
            <SinglePostDesc>{singlePost && singlePost.desc}</SinglePostDesc>
          )}
        </SinglePostWrapper>
      )}
      {updateMode && (
        <UpdateButton
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
          onClick={(e) => setPost(e)}
        >
          Save
        </UpdateButton>
      )}
    </SinglePostContainer>
  );
});

export default SinglePost;
