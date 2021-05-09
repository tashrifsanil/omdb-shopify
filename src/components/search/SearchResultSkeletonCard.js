import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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
    },
    content: {
        // height: "100%",
    },
    skeletonTitle: {
        width: "80%",
        height: "3.5vh",
    },
    skeletonSubTitle: {
        width: "5vw",
        height: "3.5vh",
    },
    skeletonMedia: {
        height: "20vh",
        width: "100%",
    },
    skeletonContent: {
        width: "5vw",
        paddingBottom: "32%",
    }
}));

const SearchResultSkeletonCard = (props) => {
    const classes = useStyles();

    useEffect(() => {
        console.log("Search result card loading -> ", props.loading);
        console.log("Search result movie -> ", props.movie);
    }, [props.loading, props.movie])



    return (
        <Card className={classes.root} fullWidth={true}>
            <CardActionArea>

                <CardMedia
                >
                    <Skeleton animation="wave" variant="rect" height="20vh" width="100%" />

                </CardMedia>
                <CardContent className={classes.content}>

                    <div className={classes.skeletonContent}>
                        <Skeleton animation="wave" height="100%" width="100%" />
                        <Skeleton animation="wave" height="100%" width="80%" />
                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Skeleton animation="wave" height="100%" width="100%" />
                <Skeleton animation="wave" height="100%" width="100%" />
            </CardActions>
        </Card>
    );
}

export default SearchResultSkeletonCard;