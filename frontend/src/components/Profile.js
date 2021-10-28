import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

export default function Profile() {
  const style = {
    position: "sticky",

    width: 400,
    bgcolor: "background.paper",

    boxShadow: 24,
    p: 4,

    margin: "30px auto",
  };

  return (
    <Box sx={style}>
      <Typography variant="h6" component="div" gutterBottom>
        Profile
      </Typography>
      <Grid container direction={"column"} spacing={2}>
        <Grid item>
          <TextField
            required
            id="outlined-basic"
            size="small"
            label="Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            required
            id="outlined-basic"
            size="small"
            label="Email"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              defaultValue="female"
              name="radio-buttons-group"
              style={{ display: "initial", marginTop: 10 }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item>
          <TextField
            required
            id="outlined-basic"
            size="small"
            label="Contact Number"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item>
          <Button variant="contained" size="medium" color="secondary" fullWidth>
            Update Profile
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
