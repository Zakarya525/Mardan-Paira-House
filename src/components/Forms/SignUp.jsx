import axios from 'axios';
import React, {Fragment, useState} from 'react';
import {useForm} from 'react-hook-form';
import FileBase64 from 'react-file-base64';
import {useNavigate, Link} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import {
  Button,
  Stack,
  TextField,
  CssBaseline,
  Box,
  Typography,
} from '@mui/material';
import '../../App.css';
import {Grow} from '@material-ui/core';

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();
  let navigate = useNavigate();

  const submitHandler = (data) => {
    console.log(data);
    fetch('https://mph-backend.herokuapp.com/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
    }).then((result) => console.log(result));
    reset();

    navigate('/login');
  };

  return (
    <Fragment>
      <Grow in={open}>
        <div id="body-content" className="container">
          <CssBaseline />
          <Box sx={{display: 'flex', p: 1}}>
            <form className="form" onSubmit={handleSubmit(submitHandler)}>
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
                aria-required={'true'}
                type="name"
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
                type="email"
                label="Email"
                margin="normal"
                {...register('email', {required: 'Please fill the field.'})}
              />
              <Typography
                variant="body2"
                sx={{
                  color: 'red',
                  float: 'left',
                }}>
                {errors.email?.message}
              </Typography>

              <TextField
                fullWidth
                id="fullWidth"
                label="Password"
                type="password"
                autoComplete="current-password"
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
                variant="body2"
                sx={{
                  color: 'red',
                  float: 'left',
                  mb: 5,
                }}>
                {errors.password?.message}
              </Typography>

              <Button type="submit" variant="contained" sx={{m: '3rem'}}>
                <input type="submit" hidden />
                Register
              </Button>
            </form>
            <div className="img-info"></div>
          </Box>
        </div>
      </Grow>
    </Fragment>
  );
};

export default SignUp;
