import * as React from "react";
import { Grid, Paper, Avatar, Typography } from "@material-ui/core";
import InfoIcon from "@mui/icons-material/Info";

const message = `Foodie hub, a subsidiary of Yum! Brands, is the world's largest food company and home of 
fast food. Foodie hub began 60 years ago in Wichita, Kansas, and today is an iconic global brand that delivers 
more pizza, pasta and wings than any other restaurant in the world. `;

export default function About() {
  const paperStyle = {
    padding: 10,
    height: "90vh",
    width: 700,
    margin: "0px auto",
  };
  const avatarStyle = { backgroundColor: "#d64161" };

  return (
    <Grid align="left">
      <Paper style={paperStyle}>
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
      </Paper>
    </Grid>
  );
}
