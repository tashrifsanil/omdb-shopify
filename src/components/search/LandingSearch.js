import React, { useEffect, useState } from "react";

import {
    TextField,
    InputAdornment,
    IconButton,
    Box,
    Grid,
    Icon,
    Typography,
} from "@material-ui/core";


import {
    makeStyles,
} from '@material-ui/core/styles';

import '@fontsource/roboto';

import SearchIcon from "@material-ui/icons/Search";
import ShopifyIcon from '../../resources/icons/shopify.svg'


const useStyles = makeStyles((theme) => ({
    root: {
        width: "50%",
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        top: "50%",
        left: "50%",
    },
    textField: {
        "& .MuiOutlinedInput-root": {
            background: theme.palette.background.paper,
            borderRadius: "20vh",
        }
    },
    banner: {
        paddingBottom: theme.spacing(4),
    },
    shoppies: {
        fontFamily: "Roboto",
        fontStyle: "italic",
        fontWeight: 700,
        flexGrow: 1,
        fontSize: "6rem",
    },
}));

const LandingSearch = (props) => {
    const classes = useStyles();

    const handleChange = (event) => {
        props.setSearchTerm(event.target.value);
    }

    return (
        <>
            {props.landing ? (
                <Box className={classes.root}>
                    <div className={classes.banner}>
                        <Grid container
                            justify="center"
                            alignItems="center"
                            spacing={3}>
                            <Grid item>
                                <Icon>
                                    <img src={ShopifyIcon}></img>
                                </Icon>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.shoppies}>
                                    the shoppies
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                    <TextField
                        className={classes.textField}
                        placeholder="Search to nominate your top 5 favorite movies & series."
                        fullWidth={true}
                        variant={'outlined'}
                        onChange={handleChange}
                        InputProps={{
                            className: classes.input,
                            startAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <div className={classes.grow} />

                </Box>
            ) : null}
        </>
    );
}

export default LandingSearch;