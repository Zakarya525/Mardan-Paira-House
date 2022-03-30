import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Button, Box, Typography} from '@mui/material';
import '../../App.css';
import Nav from '../../components/Nav';

const Home = () => {
    return (
        <Fragment>
            <div className="container">
                <Nav />
                <div>
                    <h1 className="lead">Mardan Paira House Location</h1>
                    <Typography
                        color={'white'}
                        variant="body2"
                        sx={{fontSize: '1.3rem', mt: 4}}
                        gutterBottom>
                        Paira is an Mardan dessert of fried dough balls that are soaked in a
                        sweet, sticky sugar syrup. As per tradition, the syrup has a balls
                        that are soaked in a sweet, sticky sugar syrup. As per tradition,
                        the syrup has a delicate rose flavour: Gulab means 'rose water' and
                        jamun refers to a berry of a similar size and colour.
                    </Typography>
                    <button type="Submit" className="btn btn-primary">
                        Read More
                    </button>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;
