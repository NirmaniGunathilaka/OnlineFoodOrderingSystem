import React from 'react';
import { Grid, Paper, Avatar, TextField, Button, Link, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Login = () => {
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#36c967' }
    const btnStyle = { margin: '10px 0' }
    return (
        <Grid align="left">
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label="Username" placeholder='Enter username' fullWidth required />
                <TextField label="Password" placeholder='Enter password' type="password" fullWidth required />
                <FormControlLabel align="left"
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary" />

                    }
                    label="Remember me"
                />
                <Button type="submit" color="primary" variant="contained" style={btnStyle} fullWidth>Sign in</Button>
                <Typography>
                    <Link href="#">
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography> Do you have an account?
                    <Link href="#">
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )


}
export default Login;