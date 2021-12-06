import React from 'react';
import { Grid,Button,makeStyles } from '@material-ui/core';
import MyTextField from '../../components/common/MyTextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const useStyles = makeStyles({
    button: {
        width: '100%',
        marginTop: "1rem",
        marginBottom: "0.5rem"
    },
    title: {
        fontWeight: 'bold',
        fontSize: '2rem',
        marginBottom: '1rem',
        display: 'block'
    }
});

const validationSchema = Yup.object().shape({
    name: Yup.string()
             .required("This field is required"),
    email: Yup.string()
              .required("This field is required")
});


const EditProfile = () => {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            name: "",
            email: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          console.log(values);
        },
    });

    return(
        <>
            <div className = {classes.title}>Edit Profile</div>
            <Grid container justifyContent = 'center'>
                <Grid item xs = {12}>
                    <form onSubmit = {formik.handleSubmit}>
                        <MyTextField
                            id = 'name'
                            name = 'name'
                            label = "Name"
                            type = "text"
                            value = {formik.values.name}
                            helperText = {formik.touched.name && formik.errors.name}
                            onChange = {formik.handleChange}
                            error = {formik.touched.name && Boolean(formik.errors.name)}
                        />
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
                        <Button
                            type = 'submit'
                            className = {classes.button}
                            variant="contained"
                            color="primary">
                            Update
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </>
    );
};

export default EditProfile;