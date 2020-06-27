// import React from "react";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";

import { ActionCreator } from "../../actions";

import "./signup.css";

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

const SignupComponent = (props) => {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [nameError, setNameError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("Normal");

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const onChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeRole = (event) => {
    console.log("tttttttt", event);
    setRole(event.target.value);
  };

  const onSubmit = () => {
    if (name === "") {
      setNameError(true);
      return;
    }
    if (password === "") {
      setPasswordError(true);
      return;
    }
    const data = {
      userName: name,
      userPassword: password,
      userAddress: address,
      userPhone: phone,
      userRole: role,
    };
    props.actions.postUserDetail(data);
    props.history.push("/userdetail");
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
          error={passwordError}
          placeholder="Password"
          inputProps={{ "aria-label": "description" }}
          onChange={onChangePassword}
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
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={role}
            onChange={onChangeRole}
          >
            <MenuItem value="Normal">Normal</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
          </Select>
        </FormControl>
      </form>
      <Divider light />
      <Button variant="contained" color="secondary" onClick={onSubmit}>
        Submit
      </Button>
    </Paper>
  );
};

const mapDispatchToProps = () => ({
  actions: ActionCreator,
});

const Signup = connect(null, mapDispatchToProps)(SignupComponent);

export default withRouter(Signup);
