import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
  },
  imageStyles: {
    width: "40%",
    height: "100%",
    borderRadius: "50%",
  },
  imageStylesindiv: {
    width: "40%",
    height: "100%",
    borderRadius: "50%",
  },
  profileName: {
    fontSize: "24px",
    fontFamily: "Roboto",
    lineHeight: "22px",
  },
}));
function UserCard(props) {
  const classes = useStyles();
  return (
    <>
      <Grid sm={12} item className={classes.container} p={2}>
        <Grid sm={12} item display={"flex"} justifyContent="center" pb={2}>
          <img
            src={props.profileImage}
            alt={"profile picture"}
            className={
              props?.email ? classes.imageStyles : classes.imageStylesindiv
            }
          />
        </Grid>
        <Grid sm={12} item>
          <Typography
            className={classes.profileName}
            style={{ textAlign: "center" }}
          >
            {props.name}
          </Typography>
          <Typography style={{ textAlign: "center" }}>{props.email}</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default UserCard;
