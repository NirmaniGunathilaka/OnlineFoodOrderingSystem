import * as React from "react";
import { Grid, Avatar, Typography } from "@material-ui/core";
import InfoIcon from "@mui/icons-material/Info";
import Box from "@mui/material/Box";

const message = `Foodie hub, a subsidiary of Yum! Brands, is the world's largest food company and home of 
fast food. Foodie hub began 60 years ago in Wichita, Kansas, and today is an iconic global brand that delivers 
more pizza, pasta and wings than any other restaurant in the world. `;

export default function About() {
  const style = {
    position: "sticky",
    padding: 10,
    height: "80vh",
    width: 550,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    margin: "30px auto",
  };

  const avatarStyle = { backgroundColor: "#d64161" };

  return (
    <Grid align="left">
      <Box sx={style}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <InfoIcon />
          </Avatar>
          <h2>About Us</h2>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs>
            <Typography
              variant="body2"
              align="justify"
              paragraph="true"
              display="block"
            >
              {message}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
