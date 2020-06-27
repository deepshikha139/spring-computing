import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const Popup = (props) => {
  const { isOpen, handleClose } = props;
  const classes = useStyles();

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={isOpen}
    >
      <MuiDialogTitle disableTypography className={classes.root}>
        <Typography variant="h6">Success !</Typography>
      </MuiDialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>User has been added successfully</Typography>
      </DialogContent>
      <DialogActions style={{ justifyContent: "center" }}>
        <Button
          onClick={handleClose}
          variant="contained"
          size="small"
          color="primary"
          style={{ borderRadius: 30, width: 126 }}
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
