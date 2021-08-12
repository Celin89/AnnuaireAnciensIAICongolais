import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },

  customStyles: {
    color: "white",
  },

  footer: {
    padding: theme.spacing(1, 2),
    marginTop: "auto",

    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[600]
        : theme.palette.grey[900],
  },
}));

export default function Footers() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.customStyles}>
        My footer
      </div>
    </footer>
  );
}
