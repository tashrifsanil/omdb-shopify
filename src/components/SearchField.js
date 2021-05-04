import React from 'react';

import {
    TextField,
    InputAdornment,
    IconButton,
    Grid,
} from "@material-ui/core";

import {
    makeStyles
} from '@material-ui/core/styles';

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
    textField: {
        paddingTop: theme.spacing(4),
    }
}));

const SearchField = (props) => {
    const classes = useStyles();

    return (
        <Grid container xs={12}>
            <Grid item xs={1} />
            <Grid item xs={10}>
                <TextField
                    // label="With normal TextField"
                    className={classes.textField}
                    placeholder="Search for Movies"
                    fullWidth={true}
                    variant={'outlined'}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </Grid>
            <Grid item xs={1} />

        </Grid>
    );
}

export default SearchField;