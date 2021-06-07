import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getCategoryList } from "./actions/categoryAction";
import { getPosts } from "./actions/postsAction";
import LoadingProgress from "./components/LoadingProgress";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import PostDetail from "./components/pages/PostDetail/PostDetail";
import Register from "./components/pages/Register/Register";
import Settings from "./components/pages/Settings/Settings";
import Write from "./components/pages/Write/Write";
import TopBar from "./components/Topbar/TopBar";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.postsReducer);
  const { loading, singlePost } = state;

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(getPosts());
    }
    return () => (mounted = false);
    // eslint-disable-next-line
  }, [singlePost]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(getCategoryList());
    }
    return () => (mounted = false);
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <TopBar />
      {loading ? <LoadingProgress /> : ""}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/write" component={Write} />
        <Route path="/settings" component={Settings} />
        <Route path="/post/:postId" component={PostDetail} />
      </Switch>
    </Router>
  );
};

export default App;
