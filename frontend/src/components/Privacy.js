import * as React from "react";
import { Grid, Paper, Avatar, Typography } from "@material-ui/core";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";

const message1 = "THIS PRIVACY POLICY APPLIES TO THE WEBSITE www.foodiehub.lk";
const message2 = `Company May Use Your Personal Information For Any Of The Following Purposes:`;

export default function Privacy() {
  const paperStyle = {
    padding: 10,
    height: "90vh",
    width: 700,
    margin: "0px auto",
  };
  const avatarStyle = { backgroundColor: "#82b74b" };

  return (
    <Grid align="left">
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <PrivacyTipIcon />
          </Avatar>
          <h2>Privacy Policy</h2>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs>
            <Typography
              variant="subtitle1"
              align="justify"
              paragraph="true"
              display="block"
            >
              {message1}
            </Typography>
            <Typography
              variant="subtitle2"
              align="justify"
              paragraph="true"
              display="block"
            >
              {message2}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
