import React, { useEffect, useState } from "react";

import {
    Grid,
    Button,
    Typography,
} from "@material-ui/core"

import {
    KeyboardArrowLeft,
    KeyboardArrowRight
} from '@material-ui/icons';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: "1%",
        paddingRight: "1%",
    }
}));


const PageStepper = (props) => {
    const theme = useTheme();
    const classes = useStyles();

    const maxSteps = props.steps;

    return (
        <Grid container
            className={classes.root}
            justify="space-between"
            alignItems="center"
        >
            <Grid item>
                <Button size="small" onClick={props.onBack} disabled={props.activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                </Button>
            </Grid>
            <Grid item>
                <Typography variant="body2">{props.activePage} / {maxSteps}</Typography>

            </Grid>
            <Grid item>
                <Button size="small" onClick={props.onNext} disabled={props.activePage === maxSteps - 1}>
                    Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
            </Grid>


        </Grid>
    )
}

export default PageStepper;
