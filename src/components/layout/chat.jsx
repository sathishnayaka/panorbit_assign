import React, { useEffect, useState } from "react";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import CloseIcon from "@mui/icons-material/Close";
import { userDetails } from "@/services/profile";
import { Grid, Typography } from "@mui/material";
import SubChat from "./subChat";

// import axios from "axios";
const Chat = () => {
  const [activeUsers, setActiveUsers] = React.useState([]);
  const getDatafromUrl = async () => {
    let res = await userDetails();
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user") || "");
      const result = res.users.filter((ele) => ele.id !== user.id);
      setActiveUsers(result);
    }
  };

  useEffect(() => {
    getDatafromUrl();
    console.log(activeUsers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [selectedUser, setSelectedUser] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isChildExpanded, setIsChildExpanded] = useState(false);

  function handleUserClick(user) {
    setSelectedUser(user);
    setIsChildExpanded(true);
  }

  const handleClose = () => {
    setSelectedUser(null);
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          right: 80,
          bottom: 0,
          cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "#253DA1",
            height: 56,
            width: 334,
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            alignContent: "center",
            alignItems: "center",
          }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div style={{ display: "flex", marginLeft: 20 }}>
            <ChatBubbleOutlineRoundedIcon
              style={{ color: "white", fontSize: "30px" }}
            />
            <span style={{ color: "white", marginLeft: 5, fontSize: "20px" }}>
              Chats
            </span>
          </div>
          <div style={{ marginLeft: 200, marginTop: 11 }}>
            {isExpanded ? (
              <KeyboardArrowDownOutlinedIcon style={{ color: "white" }} />
            ) : (
              <KeyboardArrowUpOutlinedIcon style={{ color: "white" }} />
            )}
          </div>
        </div>
        {isExpanded ? (
          <Grid sm={12} item bgcolor={"#fff"}>
            {activeUsers.map((user) => (
              <Grid
                sm={12}
                item
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: 12,
                }}
                key={user.id}
                onClick={() => handleUserClick(user)}
              >
                <img
                  src={user.profilepicture}
                  alt={user.name}
                  style={{
                    width: 50,
                    borderRadius: "50%",
                    marginLeft: 20,
                  }}
                />
                <Typography style={{ marginLeft: 20, fontSize: "16px" }}>
                  {user.name}
                </Typography>
                <div
                  style={{
                    backgroundColor: user.status ? "green" : "#999",
                    borderRadius: "50%",
                    width: "8px",
                    height: "8px",
                    padding: "0",
                    position: "absolute",
                    right: 30,
                  }}
                ></div>
              </Grid>
            ))}
          </Grid>
        ) : null}
      </div>
      {selectedUser && (
        <Grid
          sm={12}
          item
          style={{ position: "absolute", right: 420, bottom: 0 , maxWidth: '400px' }}
        >
          <Grid
            sm={12}
            item
            style={{
              display: "flex",
              backgroundColor: "#253DA1",
              height: 56,
              width: 434,
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              sm={12}
              item
              style={{ display: "flex", marginLeft: 20, alignItems: "center" }}
            >
              <img
                src={selectedUser.profilepicture}
                alt={selectedUser.name}
                style={{
                  width: 35,
                  borderRadius: "50%",
                  marginLeft: 2,
                  height: 35,
                }}
              />
              <span style={{ color: "white", marginLeft: 5, fontSize: "20px" }}>
                {selectedUser.name}
              </span>
              <Grid
                item
                sm={6}
                style={{ display: "flex", justifyContent:'flex-end'}}
                onClick={() => setIsChildExpanded(!isChildExpanded)}
              >
                {isChildExpanded ? (
                  <KeyboardArrowDownOutlinedIcon style={{ color: "white" }} />
                ) : (
                  <KeyboardArrowUpOutlinedIcon style={{ color: "white" }} />
                )}
                <CloseIcon
                  style={{
                    color: "white",
                  }}
                  onClick={handleClose}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid sm={12} item >
                {isChildExpanded
                  ? selectedUser && <SubChat selectedUser={selectedUser} />
                  : null}
              </Grid>
        </Grid>
      )}
    </>
  );
};

export default Chat;
