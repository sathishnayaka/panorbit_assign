import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import { Grid, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const useStyles = makeStyles(() => ({
  header: {
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "44px",
    color: "#100F0F",
  },
  navitemsActive: {
    color: "#FFFFFF",
    fontSize: "27px",
    marginLeft: "10px",
    textDecoration: "none",
    fontFamily: "Roboto",
  },
  navitemsNot: {
    color: "#A9A9A9",
    fontSize: "27px",
    marginLeft: "10px",
    textDecoration: "none",
    fontFamily: "Roboto",
  },
}));

const navarItems = [
  {
    route: "/profile",
    text: "Profile",
  },
  {
    route: "/posts",
    text: "Posts",
  },
  {
    route: "/gallery",
    text: "Gallery",
  },
  {
    route: "/todo",
    text: "ToDo",
  },
];

export default function SideNav() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <List>
          {navarItems.map(({ text, route }, index) => (
            <Grid
              sm={12}
              item
              key={text}
              display="flex"
              alignItems={"center"}
              padding={1}
            >
              <Grid
                item
                sx={{
                  padding: "3px",
                  borderRadius: "8px",
                  marginBottom: "5px",
                }}
                style={{
                  cursor: "pointer",
                  minWidth: "13vw",
                  borderBottom:
                    index !== navarItems.length - 1 ? "1px solid #9999" : "",
                }}
              >
                <Link href={route} style={{ textDecorationLine: "none" }}>
                  <ListItemButton>
                    <Typography
                      className={
                        router.pathname.includes(route)
                          ? classes.navitemsActive
                          : classes.navitemsNot
                      }
                    >
                      {text}
                    </Typography>
                  </ListItemButton>
                </Link>
              </Grid>
              {router.pathname.includes(route) ? (
                <Grid
                  item
                  justifyContent={"flex-end"}
                  style={{ backgroundColor: "#fff", borderRadius: "50%" }}
                >
                  <IconButton>
                    <ArrowBackIosIcon sx={{ color: "#999" }} />
                  </IconButton>
                </Grid>
              ) : (
                ""
              )}
            </Grid>
          ))}
        </List>
      </Box>
    </Box>
  );
}
