// import React from "react";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import { ActionCreator } from "../../actions";
import Popup from "../popup";

import "../signup/signup.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(5),
    },
    margin: theme.spacing(5),
    flexDirection: "column",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  container: {},
}));

const AddUserComponent = (props) => {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [nameError, setNameError] = React.useState(false);
  const [showPopup, setShowPopup] = React.useState(false);

  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const onChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const onClosePopup = () => {
    setShowPopup(false);
    props.history.push("");
  };

  const onSubmit = () => {
    if (name === "") {
      setNameError(true);
      return;
    }
    const data = {
      userName: name,
      userAddress: address,
      userPhone: phone,
    };
    props.actions.postUserDetail(data);
    setShowPopup(true);
  };

  return (
    <Paper className={classes.root}>
      <form className={classes.root} noValidate autoComplete="off">
        <Input
          error={nameError}
          placeholder="Name"
          inputProps={{ "aria-label": "description" }}
          onChange={onChangeName}
        />
        <Input
          placeholder="Address"
          inputProps={{ "aria-label": "description" }}
          onChange={onChangeAddress}
        />
        <Input
          placeholder="Phone Number"
          inputProps={{ "aria-label": "description" }}
          onChange={onChangePhone}
        />
      </form>
      <Divider light />
      <Button variant="contained" color="secondary" onClick={onSubmit}>
        Add
      </Button>
      {showPopup && <Popup handleClose={onClosePopup} isOpen={showPopup} />}
    </Paper>
  );
};

const mapDispatchToProps = () => ({
  actions: ActionCreator,
});

const AddUse = connect(null, mapDispatchToProps)(AddUserComponent);

const AddUser = withRouter(AddUse);

export default withRouter(AddUser);
