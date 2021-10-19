import * as React from "react";
import { Grid, Paper, Avatar, Typography } from "@material-ui/core";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const message = `0113900234`;
const message1 = `0115673800`;
export default function About() {
  const paperStyle = {
    padding: 10,
    height: "90vh",
    width: 700,
    margin: "0px auto",
  };
  const avatarStyle = { backgroundColor: "#c94c4c" };

  return (
    <Grid align="left">
      <Paper style={paperStyle}>
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
      </Paper>
    </Grid>
  );
}
