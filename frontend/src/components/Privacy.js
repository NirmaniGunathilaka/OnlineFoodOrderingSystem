import * as React from "react";
import { Grid, Avatar, Typography } from "@material-ui/core";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import Box from "@mui/material/Box";

const message1 = "THIS PRIVACY POLICY APPLIES TO THE WEBSITE www.foodiehub.lk";
const message2 = `Company May Use Your Personal Information For Any Of The Following Purposes:`;

export default function Privacy() {
  const avatarStyle = { backgroundColor: "#82b74b" };
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

  return (
    <Grid align="left">
      <Box sx={style}>
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
      </Box>
    </Grid>
  );
}
