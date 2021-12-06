import React from 'react';
import { Grid } from '@material-ui/core';
import RegisterBox from './RegisterBox';

const Register = () => {


    return(
        <Grid 
            container
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh'}}
        >
            <Grid container item justifyContent = "center" xs={12} md={5}>
                <RegisterBox/> 
            </Grid>
                     
        </Grid>
    )
};

export default Register;