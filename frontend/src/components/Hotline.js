import * as React from "react";
import { Grid, Avatar, Typography } from "@material-ui/core";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Box from "@mui/material/Box";

const message = `0113900234`;
const message1 = `0115673800`;
export default function About() {
  const avatarStyle = { backgroundColor: "#c94c4c" };

  const style = {
    position: "sticky",
    padding: 10,
    height: "70vh",
    width: 400,
    bgcolor: "background.paper",

    boxShadow: 24,
    p: 4,

    margin: "30px auto",
  };

  return (
    <Grid align="left">
      <Box sx={style}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LocalPhoneIcon />
          </Avatar>
          <h2>Hotline</h2>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs>
            <Typography
              variant="h3"
              align="center"
              size="large"
              display="block"
            >
              {message}
            </Typography>
            <Typography
              variant="h3"
              align="center"
              size="large"
              display="block"
            >
              {message1}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
