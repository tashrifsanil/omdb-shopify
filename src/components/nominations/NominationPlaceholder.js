import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
    Card
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
        minHeight: "10vh",
        border: ".15rem",
        borderStyle: "dashed",
        borderWidth: "100",
        borderColor: theme.palette.action.disabled,
    },
}));


const NominationPlaceholder = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}
            raised={false} 
            elevation={0}>
        </Card>
    );
};

export default NominationPlaceholder;