import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Chip from "@material-ui/core/Chip";
import { red } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  movieInfoDialog: {
    padding: theme.spacing(2),
    maxWidth: "md",
  },
  image: {
    justifyContent: "space-evenly",
    maxWidth: 200,
    maxHeight: 300,
  },
  img: {
    justifyContent: "space-evenly",
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  rating: {
    width: "12%",
    fontSize: "100%",
  },
}));

const MovieInfoDialog = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      //   className={"movieInfoDialog"}
      overflow={"hidden"}
      fullWidth={true}
      maxWidth={"md"}
      scroll={"body"}
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <Grid container spacing={2} fullWidth={true}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={props.poster} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                  {props.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.plot}
                </Typography>
              </Grid>
              <Grid item justify="flex-end">
                <Chip
                  className={classes.rating}
                  label={props.rating}
                  color="secondary"
                ></Chip>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onDialogClosed} color="primary">
          CLOSE
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MovieInfoDialog;
