import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';

import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
} from "@material-ui/core";

import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginRight: theme.spacing(2),
    },
    cover: {
        width: "100%",
        height: "20vh",
        // objectFit: 'cover',
    },
    title: {
        width: "100%",
        height: "1rem",
    },
    year: {
        width: "80%",
        height: "1rem",
    },
    content: {
        height: "11vh",
    },
    controls: {
    },
}));

const SearchResultSkeletonCard = (props) => {
    const classes = useStyles();

    useEffect(() => {
        console.log("Search result card loading -> ", props.loading);
        console.log("Search result movie -> ", props.movie);
    }, [props.loading, props.movie])



    return (
        <Card className={classes.root} fullWidth={true}>
            <Skeleton animation="wave" variant="rect" className={classes.cover} />

            <CardContent className={classes.content}>
                <Skeleton animation="wave" className={classes.title} />
                <Skeleton animation="wave" className={classes.year} />
            </CardContent>
            <CardActions className={classes.controls}>
                <Button
                    size="small"
                    disabled
                    fullWidth={true}
                >
                    <Skeleton animation="wave" height="100%" width="100%" />
                </Button>
                <Button
                    size="small"
                    disabled
                    fullWidth={true}
                    >
                    <Skeleton animation="wave" height="100%" width="100%"/>
                </Button>
            </CardActions>
        </Card>
    );
}

export default SearchResultSkeletonCard;