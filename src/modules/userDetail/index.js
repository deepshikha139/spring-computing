import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { ActionCreator } from "../../actions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  root: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    width: 100,
    height: 100,
  },
}));
const UserDetailComponent = (props) => {
  useEffect(() => {
    props.actions.getUserDetail();
  });

  const classes = useStyles();

  const FormRow = (props) => {
    return (
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs zeroMinWidth>
          <Typography noWrap>{props}</Typography>
        </Grid>
      </Grid>
    );
  };

  const { detail } = props;
  const showAdd = detail.userRole === "Admin";

  return (
    <div className={classes.root}>
      <Paper className={classes.listpaper}>
        {FormRow(detail.userName)}
        {detail.userAddress && FormRow(detail.userAddress)}
        {detail.phone && FormRow(detail.phone)}
        {FormRow(detail.userRole)}
        {showAdd && (
          <Button variant="contained" color="secondary">
            <Link to="/adduser">Add User</Link>
          </Button>
        )}
      </Paper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  detail: state.UsersReducer.detail,
});

const mapDispatchToProps = () => ({
  actions: ActionCreator,
});

const UserDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetailComponent);

export default withRouter(UserDetail);
