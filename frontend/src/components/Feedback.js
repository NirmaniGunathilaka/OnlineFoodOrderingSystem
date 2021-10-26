import * as React from "react";
import { Grid, Paper, Avatar, TextField, Button,FormControl,InputLabel } from "@material-ui/core";
import FeedbackIcon from "@mui/icons-material/Feedback";
import MenuItem from "@mui/material/MenuItem";
import { useFormik } from "formik";

import Select from "@mui/material/Select";

export default function Feedback() {
  const formik = useFormik({
    initialValues: {
      feedbackType: "",
      username: "",
      email: "",
      contactNo: "",
      message: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [feedbackType, setFeedbacktype] = React.useState('');
    const handleSelect = event => {
      console.log(event.target.value);
        setFeedbacktype(event.target.value);
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
    <form onSubmit={formik.handleSubmit}>
      <Grid align="left">
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <FeedbackIcon />
            </Avatar>
            <h2>Feedback !</h2>
          </Grid>
          <FormControl fullWidth>
          <InputLabel id="feedbackType">Feedback Type</InputLabel>
          <Select
            labelId="feedbackType"
            id="feedbackType"
            label="feedbackType"
            onChange={handleSelect}
            value={feedbackType}
            size="small"
          >
             <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
            <MenuItem value={10}>Contact</MenuItem>
            <MenuItem value={20}>Order Inquiry</MenuItem>
            <MenuItem value={30}>Appreciation</MenuItem>
            <MenuItem value={40}>Complaint</MenuItem>
          </Select>
          </FormControl>
          <TextField
            id="username"
            label="username"
            placeholder="Enter username"
            fullWidth
            required
            size="small"
            onChange={formik.handleChange}
            value={formik.values.username}
          />

          <TextField
            id="email"
            label="email"
            placeholder="Enter email"
            fullWidth
            required
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <TextField
            id="contactNo"
            label="contactNo"
            placeholder="Enter contact no"
            fullWidth
            required
            size="small"
            onChange={formik.handleChange}
            value={formik.values.contactNo}
          />
          <TextField
            id="message"
            label="message"
            multiline
            rows={8}
            placeholder="Enter your message"
            size="small"
            required
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.message}
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
    </form>
  );
}
