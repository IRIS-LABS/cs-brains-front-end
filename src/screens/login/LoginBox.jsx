import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Checkbox, Grid, Button } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import MyTextField from '../../components/common/MyTextField';
import gmailLogo from './../../assets/gmail-logo.svg';

const useStyles = makeStyles({
    accountContainer: {
        marginTop: '1rem'
    },
    accountText: {
        color: 'grey'
    },
    button: {
        width: '100%',
        marginTop: "1rem",
        marginBottom: "0.5rem"
    },
    checkbox: {
        marginLeft: 0,
        padding: 0,
    },
    forgotPassword: {
        color: "grey",
        marginBottom: "1rem"
    },
    googleSigninText: {
        color: "#0C66C2",
        fontWeight: "bold"
    },
    gmailLogo: {
        width: "2rem",
        height: "2rem"
    },
    loginBox: {
        width: "100%",
        padding: "3rem",
        borderRadius: 20,
        boxShadow: "0 0 10px grey",
    },
    rememberMeText: {
        marginLeft: 4
    },
    title: {
        fontSize: "2rem",
        fontWeight: "bold"
    }
});

const validationSchema = Yup.object().shape({
    email: Yup.string()
              .email("Email should be a valid email")
              .required("This field is required"),
    password: Yup.string()
                 .min(6, "Password must contain more than 6 characters")
                 .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
                        "Password must contain minimum six characters, at least one letter, one number and one special character")
                 .required("This field is required"),
});



const LoginBox = () => {
    const classes = useStyles();
    const [ rememberMeChecked, setRememberMeChecked ] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          console.log(values);
        },
      });

    return(
        <div className = {classes.loginBox}>
            <div className = {classes.title}>Sign in</div>
                <Grid container justifyContent = 'center'>
                    <Grid item md = {8}>
                        <form onSubmit = {formik.handleSubmit}>
                            <MyTextField
                                id = 'email'
                                name = 'email'
                                label = "Email"
                                type = "email"
                                value = {formik.values.email}
                                helperText = {formik.touched.email && formik.errors.email}
                                onChange = {formik.handleChange}
                                error = {formik.touched.email && Boolean(formik.errors.email)}
                            />
                            <MyTextField
                                id = 'password'
                                name = 'password'
                                label = "Password"
                                type = "password"
                                value = {formik.values.password}
                                helperText = {formik.touched.password && formik.errors.password}
                                onChange = {formik.handleChange}
                                error = {formik.touched.password && Boolean(formik.errors.password)}
                            />
                            <Grid container item xs={12}>
                                <Checkbox
                                    color = 'primary'
                                    className = {classes.checkbox}
                                    value = {rememberMeChecked}
                                    onChange = {() => setRememberMeChecked(!rememberMeChecked) }
                                />
                                <span className = {classes.rememberMeText}>Remember Me</span>
                            </Grid>
                            
                            <Button
                                type = 'submit'
                                className = {classes.button}
                                variant="contained"
                                color="primary">
                                Sign in
                            </Button>
                        </form>
                        <Grid container spacing={1} justifyContent = 'center'>
                            <Link to = '/forgot-password' className = {classes.forgotPassword}>Forgot your password?</Link>
                            {/* <span className = {classes.forgotPassword}>Forgot your password?</span> */}
                        </Grid>
                        
                        <Grid container alignItems = 'center' justifyContent = 'center'>
                            <Grid container item xs = {5}>
                                <div style = {{width: "100%", height: "0.1rem", backgroundColor: "#808080", display: "inline-block"}}/>
                            </Grid>
                            <Grid container item xs = {2} justifyContent = 'center'>
                                <span>OR</span>
                            </Grid>
                            
                            <Grid container item xs = {5}>
                                <div style = {{width: "100%", height: "0.1rem", backgroundColor: "#808080", display: "inline-block"}}/>
                            </Grid>
                        </Grid>
                        <Grid container alignItems = 'center'>
                            <Grid container item xs = {3} justifyContent = 'center'>
                                <Link to = '/google-signin'>
                                    <img 
                                        src = {gmailLogo} 
                                        alt = 'Gmail Logo'
                                        className = {classes.gmailLogo}/>
                                </Link>
                            </Grid>
                            <Grid container item xs = {9} justifyContent = 'flex-start'>
                                <Link to = '/google-signin'>
                                    <span className = {classes.googleSigninText}>Sign in with Google</span>
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid container className = {classes.accountContainer} >
                            <Grid container item sm = {8} justifyContent = 'center'>
                                <span className = {classes.accountText}>Don't have an account?</span>
                            </Grid>
                            <Grid container item sm = {4} justifyContent = 'flex-start'>
                                <Link to = '/signup'>Sign up</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
        </div>
    )
};

export default LoginBox;

