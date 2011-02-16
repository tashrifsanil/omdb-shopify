import React, { useEffect, useState } from "react";

import {
    TextField,
    InputAdornment,
    IconButton,
    Grid,
    InputBase,
    Icon,
    Typography,
    Divider
} from "@material-ui/core";


import {
    makeStyles,
    fade
} from '@material-ui/core/styles';

import MovieCreationOutlinedIcon from '@material-ui/icons/MovieCreationOutlined';

import '@fontsource/roboto';

import SearchIcon from "@material-ui/icons/Search";
import ShopifyIcon from '../resources/icons/shopify.svg'

const SearchField = (props) => {
    const [landing, setLanding] = useState(true);
    const [text, setText] = useState("");

    useEffect(() => {
        handleLanding();
    }, [props.landing])


    const [fieldStyle, setFieldStyle] = useState({
        "& .MuiOutlinedInput-root": {
            borderRadius: "20vh",
        }
    })

    const [rootStyle, setRootStyle] = useState({
        paddingTop: "25vh",
        paddingBottom: "16px",
        alignItems: 'center',
    })

    const handleLanding = () => {
        if (props.landing == false) {
            setRootStyle({
                paddingTop: "0vh",
                paddingBottom: "1vh",
                alignItems: 'center',
            })
            setFieldStyle({
                paddingTop: "16px",
            })
        }
        else {
            setRootStyle({
                paddingTop: "25vh",
                paddingBottom: "16px",
                alignItems: 'center',
            })
        }
        setLanding(props.landing);
    }

    const handleChange = (event) => {
        setText(event.target.value);
        props.setSearchTerm(event.target.value);
    }

    const handleHomeClick = (event) => {
        setText("");
        props.onHomeClick()
    }

    const useStyles = makeStyles((theme) => ({
        textField: {
            "& .MuiOutlinedInput-root": {
                background: theme.palette.background.paper,
                borderRadius: "20vh",
            }
        },
        input: {
            color: theme.palette.text.primary,
        },
        icon: {
            height: "30vh",
            width: "30vh",
            fill: "red",
        },
        banner: {
            paddingBottom: theme.spacing(4),
        },
        iconRoot: {
            // maxWidth: 50,
            textAlign: 'center',
            height: "100%",
            width: "100%",
        },
        shoppies: {
            fontFamily: "Roboto",
        },
        homeIcon: {
            color: theme.palette.primary.main,
            fontSize: "3rem",
            marginLeft: "1rem",
            marginTop: ".3rem",
        }
    }));

    const classes = useStyles();

    return (
        <Grid container style={rootStyle}>
            {landing ? (
                <Grid item container xs={12} justify="flex-start" alignItems="center" className={classes.banner}>
                    <Grid item xs={3} />
                    <Grid item>
                        <Icon className={classes.iconRoot}>
                            <img src={ShopifyIcon} className={classes.icon}></img>
                        </Icon>
                    </Grid>
                    <Grid item>
                        <Divider orientation="vertical" />
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h1" className={classes.shoppies}>the shoppies</Typography>
                    </Grid>
                </Grid>
            ) : null}
            <Grid item container xs={12} justify="center" alignItems="stretch">
                <Grid item xs={landing ? 3 : 1}>
                    {landing ? null : (
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="home"
                            onClick={handleHomeClick}>
                            <MovieCreationOutlinedIcon className={classes.homeIcon} />
                        </IconButton>
                    )}
                </Grid>

                <Grid item xs={landing ? 6 : 10}>
                    <TextField
                        // label="With normal TextField"
                        className={classes.textField}
                        style={fieldStyle}
                        placeholder="Search to nominate your top 5 favorite movies & series."
                        fullWidth={true}
                        variant={'outlined'}
                        onChange={handleChange}
                        value={text}
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
                </Grid>
                <Grid item xs={landing ? 3 : 1} />
            </Grid>

        </Grid >
    );
}

export default SearchField;