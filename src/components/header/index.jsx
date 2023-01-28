import {
  Grid,
  IconButton,
  Typography,
  Button,
  Popper,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import UserList from "../common/userList";
import UserCard from "../common/userCard";


const useStyles = makeStyles(() => ({
  rootHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "12px",
    boxSizing: "border-box",
    background: "#FFFFFF",
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: "24px",
    lineHeight: "26px",
    color: "#100F0F",
  },
  adminprofile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function Header({ heading }) {
  const [userName, setUserName] = useState("");
  const [profile, setProfile] = useState("");
  const [email, setEmail] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user") || "");
      console.log(user);
      setUserName(user?.name);
      setProfile(user?.profilepicture);
      setEmail(user?.email);
    }
  }, []);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const hanldeLagout = async () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  const handleOnClickAway = () => {
        console.log('click away ');
        setAnchorEl(null);
  };

  return (
    <>
      <Grid
        sm={12}
        item
        className={classes.rootHeader}
        padding="12px 26px 12px 26px"
        mb={3}
        borderBottom={"1px solid #999"}
      >
        <Typography className={classes.title}>{heading}</Typography>
        <Grid className={classes.adminprofile}>
          <IconButton onClick={handleClick}>
            {userName ? (
              <img
                src={profile}
                alt="profile"
                style={{ borderRadius: "50%", width: "45px" }}
              />
            ) : (
              <AccountCircleIcon fontSize="large" />
            )}
          </IconButton>
            <Popper open={open} anchorEl={anchorEl} placement={"bottom-end"} >
              <Box
                sx={{
                  width: "300px",
                  bgcolor: "background.paper",
                  borderRadius: "12px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  display: "flex",
                  flexDirection: "column",
                  justifyItems: "center",
                  padding: "10%",
                }}
              >
                <Grid sm={12} item>
                  <Grid sm={12} item>
                    <UserCard
                      profileImage={profile}
                      name={userName}
                      email={email}
                    />
                  </Grid>
                  <UserList userName={userName} />
                </Grid>
                <Grid sm={12} display="flex" justifyContent={"center"} mt={1}>
                  <Button
                    onClick={hanldeLagout}
                    sx={{
                      color: "#fff",
                      backgroundColor: "#FF6347",
                      borderRadius: "18px",
                      paddingLeft: "30px",
                      paddingTop:'10px',
                      paddingBottom:'10px',
                      fontSize: "18px",
                      textTransform:'none',
                      fontWeight: "600",
                      paddingRight: "30px",
                      "&:hover": { backgroundColor: "#FF6347" },
                    }}
                  >
                    Sign Out
                  </Button>
                </Grid>
              </Box>
            </Popper>
          <Typography>{userName ? userName : "Admin"}</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
