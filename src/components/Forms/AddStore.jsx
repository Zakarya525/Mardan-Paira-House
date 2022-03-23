import React, {Fragment, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {Button, Stack, TextField, Grow, Container} from '@mui/material';

const AddStore = () => {
  const {state} = useLocation();
  const {navigate} = useNavigate()
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsSelected] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmit = async () => {
    const response = await fetch('https://mph-backend.herokuapp.com/store', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${state.accessToken}`,
      },
      body: JSON.stringify({
        title: name,
        description: description,
      }),
    });

    navigate('/dashboard', {state: {token: state.accessToken}});

    setName('');
    setDescription('');
  };

  return (
      <Container maxwidth="sm">
        <TextField
          fullWidth
          id="fullWidth"
          label="Name"
          variant="outlined"
          value={name}
          margin="normal"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          id="fullWidth"
          type="description"
          variant="outlined"
          label="Description (More than 20 characters)"
          multiline
          rows={4}
          value={description}
          margin="normal"
          onChange={(e) => setDescription(e.target.value)}
        />

        <Stack direction="row">
          <Button
            variant="contained"
            component="label"
            margin="normal"
            sx={{m: '1rem'}}>
            <CameraAltIcon sx={{fontSize: '20px', mr: 1}}/>
            <input type="file" name="file" onChange={changeHandler} hidden />
            Select Image
          </Button>

          <Button
            disabled={description.length < 20 || name.length < 1}
            variant="contained"
            onClick={handleSubmit}
            sx={{m: '1rem'}}>
            Add {state.text}
          </Button>
        </Stack>
      </Container>
  );
};

export default AddStore;
