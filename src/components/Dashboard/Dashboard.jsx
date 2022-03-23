import UserItem from './UserItem';
import Navbar from '../Navbar';
import {Fragment, useEffect, useState} from 'react';
import {Grid} from '@mui/material';
import AddNew from './AddNew';
import {useLocation} from 'react-router-dom';
import Image from '../images/admin.jpg';

const Dashboard = () => {
  let {state} = useLocation();
  const [user, setUser] =  useState({
    username: "",
    email: "",
    store: {}
  });

  useEffect(() => {
    fetch(`https://mph-backend.herokuapp.com/users/me`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${state.token}`,
      },
    })
        .then(res => res.json())
        .then(user => {
          setUser({username: user.username, email: user.email, store: user.store})
        });
    document.body.style.background = '#f4f4f4';
  }, []);

  return (
    <Fragment>
      <Navbar
        image="1"
        username={user.username}
        email={user.email}
        avatar_url={Image}
      />

      <section className="dashboard-container">
        <Grid item>
          <UserItem username={user.username} email={user.email} avatar_url={Image} />
        </Grid>

        {state === 'Products' ? (
          <div className="grid1">
            <AddNew text="Product" path="/AddProduct" />
          </div>
        ) : (
          <div className="grid1">
            {
              user.store?.title ? user.store.title : <AddNew text="Store" token={state.token} path="/AddStore" />
            }
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default Dashboard;
