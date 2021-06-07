import React, { useCallback, useEffect, useReducer, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router";
import axios from "axios";
import LoadingBox from "../LoadingBox";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  itemText: {
    lineClamp: 2,
  },
}));
const initialState = {
  sideBarPosts: [],
  loading: false,
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, sideBarPosts: [] };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, sideBarPosts: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const SideBarLast = React.memo((props) => {
  const classes = useStyles();
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { sideBarPosts, loading } = state;

  const fetchPosts = async () => {
    dispatch({ type: "FETCH_START" });
    try {
      await axios.get("/api/posts").then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      });
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: err });
    }
  };
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetchPosts();
    }
    return () => (mounted = false);
  }, []);

  const handleClick = useCallback(
    (id) => {
      history.push(`/post/${id}`);
    },
    [history]
  );

  //console.log(posts && posts.sort())

  var options2 = { day: "numeric" };
  sideBarPosts &&
    sideBarPosts.sort((a, b) => {
      return (
        new Date(b.createdAt).toLocaleString("en-GB", options2) -
        new Date(a.createdAt).toLocaleString("en-GB", options2)
      );
    });

  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div>
      <List>
        <ListSubheader className={classes.subheader}>Today</ListSubheader>
        {loading ? (
          <LoadingBox />
        ) : (
          sideBarPosts &&
          sideBarPosts.slice(0, 5).map(({ _id, title, image, createdAt }) => (
            <React.Fragment key={_id}>
              {/* {id === 3 && <ListSubheader >Yesterday</ListSubheader>} */}
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={image} />
                </ListItemAvatar>
                <ListItemText
                  onClick={() => handleClick(_id)}
                  className={classes.itemText}
                  primary={title}
                  secondary={new Date(createdAt).toLocaleString(
                    "en-GB",
                    options
                  )}
                />
              </ListItem>
            </React.Fragment>
          ))
        )}
      </List>
    </div>
  );
});

export default SideBarLast;
