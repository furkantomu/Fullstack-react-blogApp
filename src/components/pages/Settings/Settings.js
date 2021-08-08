import React, { useCallback, useEffect, useState } from "react";
import SideBar from "../../SideBar/SideBar";
import { MdAddAPhoto } from "react-icons/md";
import {
  SettingsContainer,
  SettingsTitle,
  SettingsUpdateTitle,
  SettingsWrapper,
  SettingsForm,
  SettingsProfilPic,
  SettingsFormInput,
  SettingsFormButton,
} from "./settings-elements";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import {
  accountUpdate,
  deleteProfile,
  signout,
} from "../../../actions/userAction";
import ErrorBox from "../../ErrorBox";
import LoadingBox from "../../LoadingBox";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Settings = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    name: "",
    surname: "",
    email: "",
    password: "",
    profilePic: "",
  });
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const userUpdateReducer = useSelector((state) => state.userUpdateReducer);
  const { error,loading } = userUpdateReducer;

  const userSigninReducer = useSelector((state) => state.userSigninReducer);
  const { userInfo } = userSigninReducer;
  if (!userInfo) {
    props.history.push("/");
  }

  useEffect(() => {
    userInfo &&
      setUserData({
        ...userData,
        username: userInfo.username,
        name: userInfo.name,
        surname: userInfo.surname,
        email: userInfo.email,
      });
      // eslint-disable-next-line
  }, [userInfo]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const updateProfile = {
        username: userData.username,
        name: userData.name,
        surname: userData.surname,
        email: userData.email,
      };

      if (userData.profilePic) {
        updateProfile.profilePic = userData.profilePic;
      }
      if (userData.password) {
        updateProfile.password = userData.password;
      }
      dispatch(accountUpdate(userInfo._id, updateProfile));

      setUserData({ ...userData, password: "" });
    },
    [dispatch, userData, userInfo]
  );

  const handleClick = useCallback(() => {
    setOpen(true);
  }, []);
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteProfile(userInfo._id, userInfo.username));
    dispatch(signout());
  };

  return (
    <SettingsContainer>
      <SettingsWrapper>
        <SettingsTitle>
          <SettingsUpdateTitle>Update Your Accont</SettingsUpdateTitle>
          <SettingsUpdateTitle onClick={handleClick}>
            Delete Your
          </SettingsUpdateTitle>
        </SettingsTitle>
        <SettingsForm onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <SettingsProfilPic>
            {userInfo && (
              <img
                alt=""
                src={
                  userInfo.profilePic
                    ? userInfo.profilePic
                    : userData.profilePic
                    ? userData.profilePic
                    : "https://images.pexels.com/photos/5302784/pexels-photo-5302784.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                }
              />
            )}
            <label htmlFor="fileInput">
              <MdAddAPhoto
                style={{
                  width: 30,
                  height: 30,
                  marginLeft: 5,
                  cursor: "pointer",
                }}
              />
            </label>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setUserData({ ...userData, profilePic: base64 })
              }
            />
          </SettingsProfilPic>
          {userInfo && (
            <ErrorBox severity="success">
              Profile has been created:{" "}
              {userInfo.createdAt
              ? new Date(userInfo.createdAt).toDateString()
              : new Date().toDateString()}
            </ErrorBox>
          )}
          {error ? (
            <ErrorBox severity="warning">{error}</ErrorBox>
          ) : userUpdateReducer.userInfo ? (
            <ErrorBox severity="info">
              Profile has been last update:{" "}
              {new Date(userInfo && userInfo.updatedAt).toDateString()}
            </ErrorBox>
          ) : (
            ""
          )}
          <SettingsFormInput
            required
            variant="filled"
            label="Username"
            type="text"
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
          />
          <SettingsFormInput
            required
            type="text"
            variant="filled"
            label="Name"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <SettingsFormInput
            required
            type="text"
            variant="filled"
            label="Surname"
            value={userData.surname}
            onChange={(e) =>
              setUserData({ ...userData, surname: e.target.value })
            }
          />
          <SettingsFormInput
            required
            type="email"
            variant="filled"
            label="Email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <SettingsFormInput
            type="password"
            id="filled-basic"
            variant="filled"
            label="Password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <SettingsFormButton type="submit">
            {loading ? <LoadingBox /> : "Update"}
          </SettingsFormButton>
        </SettingsForm>
      </SettingsWrapper>
      <SideBar />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete the account?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </SettingsContainer>
  );
};

export default Settings;
