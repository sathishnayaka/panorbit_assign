import { Grid, Typography, Box } from "@mui/material";
import UserList from "../common/userList";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  container: {
            position: "absolute",
            top: "25%",
            left: "30%",
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",
            maxWidth: "40%",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            '&::-webkit-scrollbar':{
                width:0,
            }
  },
}));
function LandingPage() {
    const classes = useStyles();
  return (
    <>
      <Grid sm={12} container>
        <Grid
          sm={12}
          bgcolor="#5000ca"
          item
          minWidth={200}
          style={{ width: "100%", height: "50vh" }}
        ></Grid>
        <Box
          className={classes.container}
        >
          <Grid sm={12} item padding={3} bgcolor="#DCDCDC" borderRadius={"8px"}>
            <Typography
              style={{
                fontSize: "24px",
                fontFamily: "Roboto",
                color: "#808080",
                fontWeight: "500",
              }}
            >
              Select an account
            </Typography>
          </Grid>
          <Grid sm={12} item>
            <UserList />
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

export default LandingPage;
