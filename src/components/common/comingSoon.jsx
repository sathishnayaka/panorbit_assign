import { Grid, Typography } from "@mui/material";
function ComingSoon() {
  return (
      <Grid
        sm={12}
        item
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80%",
        }}
      >
        <Typography
          style={{
            fontFamily: "Roboto",
            fontSize: "6rem",
            fontWeight: "600",
            color: "#999",
            opacity: 0.3,
          }}
        >
          Coming Soon
        </Typography>
      </Grid>
  );
}

export default ComingSoon;
