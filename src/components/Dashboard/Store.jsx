import * as React from 'react';
import {Link} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Button, CardActions} from '@mui/material';

export default function Store({title, description, token}) {
  return (
    /* Whenever someone click on card it will be redirected to products.. for that
      we will move to dashboard to show products (passing the right props). */
    <Card sx={{maxWidth: 345}}>
      <Link to="/products">
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Link to="/AddProduct" state={{value: 'Product', accessToken: token}}>
          <Button size="small" color="primary">
            Click to Add New Product
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
