import { Box, Grid } from "@mui/material";
import Chat from "./chat";
import SideNav from "./sideNav";

function Layout({ children }) {
  return (
    <>
      <Box sx={{ MaxWidth: "100vh", overflow: "hidden" }}>
        <Grid container item>
          <Grid
            sm={1.8}
            item
            minHeight={"100vh"}
            sx={{ background: 'linear-gradient(181deg, rgb(23, 22, 97) 15%, rgb(97, 149, 219) 158.5%)'}}
          >
            <SideNav />
          </Grid>
          <Grid sm={10.2} p={2} item>
            {children}
          </Grid>
          <Chat />
        </Grid>
      </Box>
    </>
  );
}
export default Layout;
