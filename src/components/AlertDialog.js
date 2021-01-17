import React, { useEffect } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const AlertDialog = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (props.open === true) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [props.open, props.nominations]);

  return (
    <div>
      {props.hideButton ? (
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          SUBMIT
        </Button>
      ) : null}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{"Nominations Submitted"}</DialogTitle>
        <DialogContent>
          {props.nominations.map((movie, index) => {
            return (
              <DialogContentText>
                {index + 1}. {movie.Title}
              </DialogContentText>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
