import React, { useState, useCallback, useEffect } from "react";
import { BiImageAdd } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { addPost, getPosts } from "../../../actions/postsAction";
import {
  WriteImg,
  FormButton,
  FormInput,
  WriteContainer,
  WriteForm,
  FormTextArea,
  WriteFormGroup,
  WriteSelectTags,
  SelectedTags,
} from "./write-elements";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../../LoadingBox";
import FileBase from "react-file-base64";
import Icon from "@material-ui/core/Icon";

const Write = (props) => {
  const dispatch = useDispatch();


  const [postData, setPostData] = useState({
    desc: "",
    title: "",
    selectedFile: "",
  });

  const [categories, setCategories] = useState([]);
  const state = useSelector((state) => state.categoryReducer);
  const { category } = state;

  const userSigninReducer = useSelector((state) => state.userSigninReducer);
  const { userInfo } = userSigninReducer;

  const postsReducer = useSelector((state) => state.postsReducer);
  const { loading } = postsReducer;

  useEffect(() => {
    if (!userInfo) {
      props.history.push("/login");
    }
  }, [props, userInfo]);

  const handleSubmit = useCallback(async (e) => {
      e.preventDefault();
      const newPost = {
        username: userInfo.username,
        title: postData.title,
        desc: postData.desc,
        categories,
      };
      if (postData.selectedFile) {
        newPost.image = postData.selectedFile;
      }

      if (categories.length === 0) {
        alert("select tags");
      } else {
        await dispatch(addPost(newPost));
        props.history.push(`/`);
      }
    },
    [categories, dispatch, postData, userInfo, props]
  );
  

  return (
    <WriteContainer>
      {postData.selectedFile && <WriteImg alt="" src={postData.selectedFile} />}
      <WriteForm onSubmit={handleSubmit}>
        <WriteFormGroup>
          <div>
            <BiImageAdd
              style={{
                fontSize: 35,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            />
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <FormInput
            name="title"
            type="text"
            required
            id="standard-basic"
            label="Title"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </WriteFormGroup>
        <WriteSelectTags>
          <p
            style={{
              width: "100%",
              paddingBottom: 10,
              fontSize: 20,
              fontFamily: "Josefin Sans",
            }}
          >
            Select Tags:
          </p>
          {category &&
            category.map((item, index) => {
              return (
                <span
                  key={index}
                  onClick={() => {
                    const existItem = categories.find((x) => x === item.name);
                    if (existItem) {
                      return {
                        ...state,
                      };
                    } else {
                      return setCategories((categories) => [
                        ...categories,
                        item.name,
                      ]);
                    }
                  }}
                >
                  {item.name}
                </span>
              );
            })}
        </WriteSelectTags>
        <WriteSelectTags>Selected Tags:</WriteSelectTags>
        <SelectedTags>
          {categories &&
            categories.map((item, index) => {
              return (
                <span
                  key={index}
                  onClick={() => {
                    setCategories(categories.filter((x) => x !== item));
                  }}
                >
                  {item}
                  <TiDelete color="#C3072B" />
                </span>
              );
            })}
        </SelectedTags>

        <WriteFormGroup>
          <FormTextArea
            value={postData.desc}
            onChange={(e) => setPostData({ ...postData, desc: e.target.value })}
            placeholder="Tell your story..."
            type="text"
            required
          />
        </WriteFormGroup>
        <FormButton
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<Icon>send</Icon>}
        >
          {loading ? <LoadingBox /> : "Send"}
        </FormButton>
      </WriteForm>
    </WriteContainer>
  );
};

export default Write;
