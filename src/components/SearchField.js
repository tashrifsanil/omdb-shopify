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
    textField: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        [`& fieldset`]: {
            borderRadius: "20vh",
        },
        "& .MuiFilledInput-root": {
            // background: "#2f2f2f"
            foreground: "red",
        },
        "& .MuiOutlinedInput-root": {
            // background: "#2f2f2f"
            foreground: "red",

        },
        search: {
            // backgroundColor: "#BB86FC",
            // backgroundColor: "#BB86FC",
            // position: 'relative',
            // borderRadius: "25vh",
            // backgroundColor: fade(theme.palette.common.white, 0.15),
            // '&:hover': {
            //     backgroundColor: fade(theme.palette.common.white, 0.25),
            // },
            // marginLeft: 0,
            // width: '100%',
            // [theme.breakpoints.up('sm')]: {
            //     marginLeft: theme.spacing(1),
            //     width: 'auto',
            // },
        },
        searchIcon: {
            // backgroundColor: "#BB86FC",
            // backgroundColor: "#BB86FC",
            // padding: theme.spacing(0, 2),
            // height: '100%',
            // position: 'absolute',
            // pointerEvents: 'none',
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
            // backgroundColor: "#BB86FC",
            // backgroundColor: "#BB86FC",
        },
        inputInput: {
            // backgroundColor: "#BB86FC",
            // backgroundColor: "#BB86FC",
            // padding: theme.spacing(1, 1, 1, 0),
            // // vertical padding + font size from searchIcon
            // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            // transition: theme.transitions.create('width'),
            // width: '100%',
            // [theme.breakpoints.up('sm')]: {
            //     width: '12ch',
            //     '&:focus': {
            //         width: '20ch',
            //     },
            // },
        },
    },
}));

const SearchField = (props) => {
    const classes = useStyles();

    return (
        // <Grid container xs={12}>
        //     <Grid item>
        //         <div className={classes.search}>
        //             <div className={classes.searchIcon}>
        //                 <SearchIcon />
        //             </div>
        //             <InputBase
        //                 placeholder="Search…"
        //                 classes={{
        //                     root: classes.inputRoot,
        //                     input: classes.inputInput,
        //                 }}
        //                 inputProps={{ 'aria-label': 'search' }}
        //             />
        //         </div>
        //     </Grid>
        // </Grid>
        <Grid container xs={12}>
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