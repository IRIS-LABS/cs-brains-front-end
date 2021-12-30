import React from 'react';
import { Grid } from '@material-ui/core';
import EditProfile from './EditProfile';

const Account = () => {
    return(
        <Grid 
            container
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh'}}
        >
        <Grid container item justifyContent = "center" xs={12} md={5}>
            <EditProfile/>
        </Grid>            
    </Grid>
    )
};

export default Account;