import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {Button, Stack, TextField, Grow, Container} from '@mui/material';

const AddProduct = () => {
  const {state} = useLocation();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsSelected] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmit = async () => {
    const response = await fetch('https://mph-backend.herokuapp.com/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${state.accessToken}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
        price: '400$',
      }),
    });

    console.log(response);
    setName('');
    setDescription('');
  };

  return (
    <Grow in={true}>
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
            <CameraAltIcon sx={{fontSize: '20px', mr: 1}}></CameraAltIcon>
            <input type="file" name="file" onChange={changeHandler} hidden />
            Select Image
          </Button>

          <Button
            onClick={handleSubmit}
            disabled={description.length < 20 || name.length < 1}
            variant="contained"
            sx={{m: '1rem'}}>
            Add {state.value}
          </Button>
        </Stack>
      </Container>
    </Grow>
  );
};

export default AddProduct;
