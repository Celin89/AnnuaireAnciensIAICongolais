import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  root2: {
    backgroundColor: "green",
    margin: "auto",
  },
  headerGrid: {
    backgroundColor: theme.palette.grey[200],
  },
  lastColumnGrid: {
    textAlign: "left",
    marginLeft: "75%",
  },
  backgroundImg: {
    margin: "auto",
    backgroundSize: "cover",
    width: "100%",
    height: "200px",
  },
  media: {
    height: 250,
    width: 1200,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    width: "100",
    margin: "auto",
    height: "100",
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },

  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  customStyles: {
    color: "white",
  },
  gridStyles: {
    width: "50%",
    margin: "auto",
    color: "#fff",
  },
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            ANCIENS IAI CONGOLAIS 
          </Typography> 
          <nav>
            <Link variant="button" color="textPrimary" href="/App" className={classes.link}>
              ACCUEIL
            </Link>
            <Link variant="button" color="textPrimary" href="/Actualites" className={classes.link}>
              ACTUALITES
            </Link>
            <Link variant="button" color="textPrimary" href="/Realisations" className={classes.link}>
              NOS REALISATIONS
            </Link>
            <Link variant="button" color="textPrimary" href="/Annuaire" className={classes.link}>
              ANNUAIRE
            </Link>
            <Link variant="button" color="textPrimary" href="/Forum" className={classes.link}> 
              FORUM
            </Link>
          </nav>
          <Button href="/SignIn" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>      
    </div>
  );
}
