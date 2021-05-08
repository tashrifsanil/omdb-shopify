import React, { useEffect } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";


const AlertDialog = (props) => {
  const [open, setOpen] = React.useState(false);

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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"I
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
