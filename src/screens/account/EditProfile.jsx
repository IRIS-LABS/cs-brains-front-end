import React, { useState } from 'react';
import { Box, Grid, Button, Modal, makeStyles } from '@material-ui/core';
import MyTextField from '../../components/common/MyTextField';
import MuiPhoneNumber from 'mui-phone-number';
import { useFormik } from 'formik';
import avatar from "../../assets/default-avatar.svg";
import * as Yup from 'yup';
import MyAvatarUploader from '../../components/common/MyAvatarUploader';


const useStyles = makeStyles({
    avatar: {
        cursor: "pointer",
        position: "relative",
        left: 30
    },
    avatarButton: {
        width: 20,
        height: 20,
        position: "relative",
        top: 110,
        right: 20

    },
    button: {
        width: '100%',
        marginTop: "1rem",
        marginBottom: "0.5rem"
    },
    editProfileBox: {
        width: "100%",
        padding: 10,
        justifyContent: "center",
        display: "block"
    },
    profilePictureEditor: {
        justifyContent: "center",
        alignItems: "center",
    },
    profilePictureEditorButtonsContainer: {
        marginTop: 20,
        justifyContent: "space-around",
        display: "flex",
    },
    title: {
        fontWeight: 'bold',
        fontSize: '2rem',
        marginBottom: '1rem',
    },
    titleContainer: {
        justifyContent: "center",
        backgroundColor: "blue",
        flexDirection: "row",
    }
});

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .trim()
        .matches(/^[a-z A-Z]+$/, "english character (a-z, A-Z)"),
    lastName: Yup.string()
        .trim()
        .matches(/^[a-z A-Z]+$/, "english character (a-z, A-Z)"),
    phoneNumber: Yup.string()
        .trim()
        .matches(/^[+0-9]+$/, "phone number (Characters allowed: 0-9, +)"),
    jobTitle: Yup.string()
        .trim()
        .matches(/^[a-z A-Z]+$/, "english character (a-z, A-Z)"),
    linkedinURL: Yup.string()
        .trim(),
    facebookURL: Yup.string()
        .trim(),
    twitterURL: Yup.string()
        .trim(),
    personalWebsiteURL: Yup.string()
        .trim(),

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

    const [profilePictureOpen, setProfilePictureOpen] = useState(false);

    return (
        <div className={classes.editProfileBox}>

            <Grid container justifyContent='center'>
                <Grid container xs={12} justifyContent="center">
                    <div className={classes.title}>Edit Profile</div>
                </Grid>
                <Grid container xs={12} justifyContent="center">
                    <Modal

                        open={profilePictureOpen}
                        className={classes.profilePictureEditor}
                    >
                        <Box style={{ position: "absolute", top: "20%", left: "40%" }}>
                            <MyAvatarUploader />
                            <div className={classes.profilePictureEditorButtonsContainer}>
                                <Button
                                    type='submit'
                                    variant="contained"
                                    color="primary"
                                    onClick={() => setProfilePictureOpen(false)}
                                >
                                    Close
                                </Button>
                                <Button
                                    type='submit'
                                    variant="contained"
                                    color="primary"
                                    onClick={() => setProfilePictureOpen(false)}
                                >
                                    Confirm
                                </Button>

                            </div>
                        </Box>
                    </Modal>
                    <img
                        src={avatar}
                        width={120}
                        height={120}
                        className={classes.avatar}
                        onClick={() => setProfilePictureOpen(true)}
                    />
                    <Button
                        type='submit'
                        className={classes.avatarButton}
                        variant="contained"
                        color="primary"
                        onClick={() => setProfilePictureOpen(true)}
                    >
                        Change
                    </Button>
                </Grid>
                <Grid item xs={12} md={5} justifyContent="center">
                    <form onSubmit={formik.handleSubmit}>
                        <MyTextField
                            id='firstName'
                            name='firstName'
                            label="First Name"
                            type="text"
                            value={formik.values.firstName}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                            onChange={formik.handleChange}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        />
                        <MyTextField
                            id='lastName'
                            name='lastName'
                            label="Last Name"
                            type="text"
                            value={formik.values.lastName}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                            onChange={formik.handleChange}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        />
                        <MuiPhoneNumber
                            defaultCountry={'us'}
                            fullWidth
                            onChange={(value) => console.log(value)}
                            id='phoneNumber'
                            name='phoneNumber'
                            label="Phone Number"
                            variant="outlined"
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                        />
                        <MyTextField
                            id='jobTitle'
                            name='jobTitle'
                            label="Job Title"
                            type="text"
                            value={formik.values.jobTitle}
                            helperText={formik.touched.jobTitle && formik.errors.jobTitle}
                            onChange={formik.handleChange}
                            error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
                        />
                        <MyTextField
                            id='linkedinURL'
                            name='linkedinURL'
                            label="Linkedin URL"
                            type="text"
                            value={formik.values.linkedinURL}
                            helperText={formik.touched.linkedinURL && formik.errors.linkedinURL}
                            onChange={formik.handleChange}
                            error={formik.touched.linkedinURL && Boolean(formik.errors.linkedinURL)}
                        />
                        <MyTextField
                            id='facebookURL'
                            name='facebookURL'
                            label="Facebook URL"
                            type="text"
                            value={formik.values.facebookURL}
                            helperText={formik.touched.facebookURL && formik.errors.facebookURL}
                            onChange={formik.handleChange}
                            error={formik.touched.facebookURL && Boolean(formik.errors.facebookURL)}
                        />
                        <MyTextField
                            id='twitterURL'
                            name='twitterURL'
                            label="Twitter URL"
                            type="text"
                            value={formik.values.twitterURL}
                            helperText={formik.touched.twitterURL && formik.errors.twitterURL}
                            onChange={formik.handleChange}
                            error={formik.touched.twitterURL && Boolean(formik.errors.twitterURL)}
                        />
                        <MyTextField
                            id='personalWebsiteURL'
                            name='personalWebsiteURL'
                            label="Personal Website URL"
                            type="text"
                            value={formik.values.personalWebsiteURL}
                            helperText={formik.touched.personalWebsiteURL && formik.errors.personalWebsiteURL}
                            onChange={formik.handleChange}
                            error={formik.touched.personalWebsiteURL && Boolean(formik.errors.personalWebsiteURL)}
                        />

                        <Button
                            type='submit'
                            className={classes.button}
                            variant="contained"
                            color="primary">
                            Update
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};

export default EditProfile;