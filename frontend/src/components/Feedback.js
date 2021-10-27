import * as React from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import FeedbackIcon from "@mui/icons-material/Feedback";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";

export default function Feedback() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const paperStyle = {
    padding: 10,
    height: "90vh",
    width: 300,
    margin: "0px auto",
  };
  const avatarStyle = { backgroundColor: "#d64161" };
  const btnStyle = { margin: "10px 0" };

  return (
    <Grid align="left">
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <FeedbackIcon />
          </Avatar>
          <h2>Feedback !</h2>
        </Grid>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          fullWidth
          size="small"
        >
          <MenuItem value={10}>Contact</MenuItem>
          <MenuItem value={20}>Order Inquiry</MenuItem>
          <MenuItem value={30}>Appreciation</MenuItem>
          <MenuItem value={40}>Complaint</MenuItem>
        </Select>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
          size="small"
        />

        <TextField label="Email" placeholder="Enter email" fullWidth required />

        <TextField
          label="ContactNo"
          placeholder="Enter contact no"
          fullWidth
          required
          size="small"
        />
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={8}
          placeholder="Enter contact no"
          size="small"
          required
          fullWidth
        />

        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnStyle}
          fullWidth
          size="small"
        >
          Send
        </Button>
      </Paper>
    </Grid>
  );
}
