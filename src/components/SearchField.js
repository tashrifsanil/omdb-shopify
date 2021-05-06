import React from 'react';

import {
    TextField,
    InputAdornment,
    IconButton,
    Grid,
    InputBase,
} from "@material-ui/core";

import {
    makeStyles,
    fade
} from '@material-ui/core/styles';

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    textField: {
        // paddingTop: theme.spacing(4),
        // paddingBottom: theme.spacing(4),
        "& .MuiFilledInput-root": {
            background: "red",
            borderRadius: "20vh",
        },
        "& .MuiOutlinedInput-root": {
            background: theme.palette.background.paper,
            borderRadius: "20vh",
        },
    },
    input: {
        color: "white",
    }
}));

const SearchField = (props) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={1} />
            <Grid item xs={10}>
                <TextField
                    // label="With normal TextField"
                    className={classes.textField}
                    placeholder="Search for Movies to Nominate"
                    fullWidth={true}
                    variant={'outlined'}
                    onChange={(event) => props.setSearchTerm(event.target.value)}
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
            <Grid item xs={1} />

        </Grid>
    );
}

export default SearchField;