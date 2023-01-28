import { Grid, Typography } from "@mui/material";
import { userDetails } from "@/services/profile";
import { useEffect } from "react";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import Router from "next/router";

const useStyles = makeStyles(() => ({
  namefonts: {
    fontSize: "1.5vw",
    fontFamily: "Roboto",
    lineHeight: "16px",
    color: "#999",
    marginLeft: "10px",
  },
  imagestyles: {
    width: "7%",
    height: "100%",
    borderRadius: "50%",
  },
  container: {
    "&::-webkit-scrollbar": {
      width: 0,
    },
  },
}));
function UserList(props) {
  const [users, setUsers] = useState([]);
  const classes = useStyles();
  const getUsers = async () => {
    try {
      const res = await userDetails();
      if(localStorage.getItem('user')){
        const user = JSON.parse(localStorage.getItem("user") || "");
        const result = res.users.filter((ele) => ele.id !== user.id );
        setUsers(result);
      }else{
        setUsers(res.users);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  const handleOnClick = (user) => {
    console.log(user, "user details");
    if (props?.userName) {
      localStorage.removeItem("user");
      localStorage.setItem("user", JSON.stringify(user));
      Router.reload();
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      Router.push("/profile");
    }
  };

  return (
    <Grid
      container
      sm={12}
      style={{
        display: "flex",
        overflow: "auto",
        maxHeight: props?.userName ? 150 : 300,
      }}
      className={classes.container}
    >
      {users &&
        users.map((item) => (
          <Grid
            sm={12}
            key={item.id}
            style={{
              cursor: "pointer",
              borderBottom: "1px solid #999",
              justifyItems: "center",
              alignItems: "center",
              padding: props?.userName ? "15px" : "20px",
              display: "flex",
            }}
            item
            onClick={() => handleOnClick(item)}
          >
            <img
              src={item?.profilepicture}
              width={10}
              height={12}
              alt="profile-image"
              className={classes.imagestyles}
            />
            <Typography
              className={classes.namefonts}
              style={{ fontSize: props?.userName ? "1rem" : "1.5rem" }}
            >
              {item?.name}
            </Typography>
          </Grid>
        ))}
    </Grid>
  );
}

export default UserList;
