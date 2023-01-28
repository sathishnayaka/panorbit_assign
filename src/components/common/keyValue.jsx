import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
const useStyles = makeStyles(() => ({
  keyValue: {
    fontFamily: "Roboto",
    fontSize: "1.5rem",
    lineHeight: "2rem",
    color: "#A9A9A9",
    fontWeight: "400",
    lineHeight: "2rem",
  },
  valueStyles: {
    fontFamily: "Roboto",
    fontSize: "1.5rem",
    color: "#000",
    fontWeight: "500",
    lineHeight: "2rem",
  },
}));
function KeyValue({ keyValue, value }) {
  const classes = useStyles();
  return (
    <Grid sm={12} item display={"flex"} justifySelf="center">
      <Grid sm={6} display="flex" justifyContent={"flex-end"}>
        <Typography className={classes.keyValue}>{keyValue} : </Typography>
      </Grid>
      <Grid sm={6} pr={1} display="flex" justifyContent={"flex-start"}>
        <Typography className={classes.valueStyles} ml={1}>
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default KeyValue;
