import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';


const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: 'orange' }
    const typoStyle = { fontSize: 13 }
    const marginTop = { marginTop: 10 }
    return (
        <Grid align="left">
            <Paper elevation={20} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h1 style={headerStyle}>Sign Up</h1>
                    <Typography varient="caption" style={typoStyle}  gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' />
                    <TextField fullWidth label='Email' />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                            aria-label="gender"

                            defaultValue="female"
                            name="radio-buttons-group"
                            style={{ display: 'initial', marginTop: 10 }}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />

                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Contact Number' />
                    <TextField fullWidth label='Password' type="password" />
                    <TextField fullWidth label='Confirm Password' type="password"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type="submit" variant='contained' color='primary'>Sign up</Button>
                </form>

            </Paper>
        </Grid>
    )
}

export default Signup;