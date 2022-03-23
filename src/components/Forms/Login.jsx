import React, {Fragment, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Link, useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Box, Button, CssBaseline, TextField, Typography,} from '@mui/material';
import {Grow} from '@material-ui/core';

export const Login = () => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const [accessToken, setAccessToken] = useState('');

  const fetchUser = async (data) => {
    const res = await fetch(`https://mph-backend.herokuapp.com/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(
        `grant_type=&username=${data.username}&password=${data.password}&scope=&client_id=&client_secret=`,
      ),
    });

    const result = await res.json();
    navigate('/dashboard', {state: {token: result.access_token}});
  };

  return (
    <Fragment>
      <Grow in={true}>
        <div className="container" id="body-content" maxwidth="lg">
          <CssBaseline />

          <Box sx={{display: 'flex', p: 1}}>
            <form className="form" onSubmit={handleSubmit(fetchUser)}>
              <CssBaseline />
              <Link to="/">
                <ArrowBackIcon
                  sx={{
                    color: '#1E90FF',
                    float: 'left',
                    ':hover': {
                      color: '#1976d2',
                    },
                  }}></ArrowBackIcon>
              </Link>
              <TextField
                fullWidth
                id="fullWidth"
                label="Username"
                variant="outlined"
                margin="normal"
                {...register('username', {required: 'Please fill the field.'})}
              />
              <Typography
                variant="body2"
                sx={{
                  color: 'red',
                  float: 'left',
                }}>
                {errors.username?.message}
              </Typography>
              <TextField
                fullWidth
                id="fullWidth"
                type="password"
                label="Password"
                variant="outlined"
                margin="normal"
                {...register('password', {
                  required: 'Please fill the field.',
                  minLength: {
                    value: 8,
                    message: 'Min length is 8',
                  },
                })}
              />
              <Typography
                variant="body6"
                sx={{
                  color: 'red',
                  float: 'left',
                }}>
                {errors.password?.message}
              </Typography>

              <Box>
                <Link to="/SignUp">
                  <Button margin="normal" sx={{m: '1rem'}}>
                    Register
                  </Button>
                </Link>

                <Button type="submit" variant="contained" sx={{m: '1rem'}}>
                  <input type="submit" hidden />
                  Sign In
                </Button>
              </Box>
            </form>
            <div className="img-info"></div>
          </Box>
        </div>
      </Grow>
    </Fragment>
  );
};
export default Login;
