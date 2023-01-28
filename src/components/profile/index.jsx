import { Grid, Typography } from "@mui/material";
import UserCard from "../common/userCard";
import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import KeyValue from "../common/keyValue"; // reuseable component to add Key : value
import MapContainer from "./googleMaps"; // Google maps integrated functional component
const useStyles = makeStyles(() => ({
  keyValue: {
    fontFamily: "Roboto",
    fontSize: "1.8rem",
    lineHeight: "2rem",
    color: "#A9A9A9",
    fontWeight: "400",
    lineHeight: "2rem",
  },
  valueStyles: {
    fontFamily: "Roboto",
    fontSize: "2rem",
    color: "#696969",
    fontWeight: "400",
    lineHeight: "2rem",
  },
}));
function Profile() {
  const [profileDetails, setProfileDetails] = useState({});
  const classes = useStyles();
  useEffect(() => {
    // if the local stogage has an item "user" then only we will get the user if there is no "user" it will direct to landing_page
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user") || "");
      console.log(user);
      setProfileDetails(user);
    }
  }, []);
  return (
    <>
      <Grid sm={12} item container>
        <Grid sm={5} item borderRight={"1px solid #999"}>
          <UserCard
            profileImage={profileDetails?.profilepicture}
            name={profileDetails?.name}
          />
          <Grid sm={12} item mb={1.5}>
            <KeyValue keyValue={"Username"} value={profileDetails?.username} />
          </Grid>
          <Grid sm={12} item mb={1.5}>
            <KeyValue keyValue={"e-mail"} value={profileDetails?.email} />
          </Grid>
          <Grid sm={12} item mb={1.5}>
            <KeyValue keyValue={"Phone"} value={profileDetails?.phone} />
          </Grid>
          <Grid sm={12} item>
            <KeyValue keyValue={"Website"} value={profileDetails?.website} />
          </Grid>
          <hr style={{ width: "60%", marginTop: "5%" }} />
          <Grid
            sm={12}
            display="flex"
            justifyContent="center"
            marginBottom={"3%"}
          >
            <Typography className={classes.keyValue}>Company</Typography>
          </Grid>
          <Grid sm={12} item mb={1.5}>
            <KeyValue keyValue={"Name"} value={profileDetails?.company?.name} />
          </Grid>
          <Grid sm={12} item mb={1.5}>
            <KeyValue
              keyValue={"catchphrase"}
              value={profileDetails?.company?.catchPhrase}
            />
          </Grid>
          <Grid sm={12} item>
            <KeyValue keyValue={"bs"} value={profileDetails?.company?.bs} />
          </Grid>
        </Grid>
        <Grid sm={7} item p={3}>
          <Grid
            sm={12}
            display="flex"
            justifyContent="flex-start"
            marginBottom={"3%"}
          >
            <Typography className={classes.keyValue}>Address</Typography>
          </Grid>
          <Grid sm={6}>
            <Grid sm={12} item mb={1.5}>
              <KeyValue
                keyValue={"Street"}
                value={profileDetails?.address?.street}
              />
            </Grid>
            <Grid sm={12} item mb={1.5}>
              <KeyValue
                keyValue={"Suite"}
                value={profileDetails?.address?.suite}
              />
            </Grid>
            <Grid sm={12} item mb={1.5}>
              <KeyValue
                keyValue={"City"}
                value={profileDetails?.address?.city}
              />
            </Grid>
            <Grid sm={12} item>
              <KeyValue
                keyValue={"Zipcode"}
                value={profileDetails?.address?.zipcode}
              />
            </Grid>
            <Grid sm={12} item mt={2}>
              <MapContainer coords={profileDetails?.address?.geo} />
            </Grid>
            <Grid
              sm={12}
              item
              mt={12}
              position="absolute"
              bottom={"2%"}
              right={90}
              display="flex"
            >
              <Typography style={{ fontSize: "18px", color: "#999" }}>
                Lat:{" "}
              </Typography>
              <Typography
                style={{
                  fontSize: "18px",
                  fontFamily: "Roboto",
                  marginRight: "25px",
                }}
              >
                {profileDetails?.address?.geo?.lat}
              </Typography>
              <Typography style={{ fontSize: "18px", color: "#999" }}>
                Long:{" "}
              </Typography>
              <Typography style={{ fontSize: "18px", fontFamily: "Roboto" }}>
                {profileDetails?.address?.geo?.lng}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;
