import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'Nom',
    headerName: 'Nom',
    width: 200,
    editable: true,
  },
  {
    field: 'Prenom',
    headerName: 'Prenom',
    width: 200,
    editable: true,
  },
  {
    field: 'Email',
    headerName: 'Email',
    width: 200,
    editable: true,
  },
  {
    field: 'Telephone',
    headerName: 'Telephone',
    width: 200,
    editable: true,
  },
  {
    field: 'Adresse',
    headerName: 'Adresse',
    width: 200,
    editable: true,
  },

  {
    field: 'CodePostal',
    headerName: 'Code Postal',
    width: 200,
    editable: true,
  },
  {
    field: 'Ville',
    headerName: 'Ville',
    width: 150,
    editable: true,
  },
  {
    field: 'Pays',
    headerName: 'Pays',
    width: 150,
    editable: true,
  },

  {
    field: 'Fonction',
    headerName: 'Fonction',
    width: 200,
    editable: true,
  },
  {
    field: 'Competence',
    headerName: 'Competence',
    width: 200,
    editable: true,
  },
  {
    field: 'Promotion',
    headerName: 'Promotion',
    width: 150,
    editable: true,
  },

  {
    field: 'DiplomeObtenu',
    headerName: 'Diplome Obtenu',
    width: 200,
    editable: true,
  },
 
];

const rows = [
  { id: 1, Nom: 'NKOUKA', Prenom: 'Christ Celin', Email: 'celinbas@gmail.com' , Telephone:'0033605837471',
   Adresse:'23 bis rue du general schmitz', CodePostal:'95300' , Ville:'Pontoise' , Pays:'France', Fonction:'Consultant etudes et developpement PHP/JS', 
   Competence:'PHP/SYMFONY/ANGULAR/REACT' , Promotion:'2010-2016' , DiplomeObtenu:'Master CSI'  },
  { id: 2, Nom: 'GAMATH GOUBILI', Prenom: 'Igor Josphin', Email: 'ig.gamath@gmail.com' , Telephone:'0033605837471',
  Adresse:'23 bis rue du general schmitz', CodePostal:'95300' , Ville:'Pontoise' , Pays:'France', Fonction:'Consultant etudes et developpement PHP/JS', 
  Competence:'PHP/SYMFONY/ANGULAR/REACT' , Promotion:'2010-2016' , DiplomeObtenu:'Master CSI' },
  { id: 3, Nom: 'MOUVOULOU', Prenom: 'Harvey Gracia', Email: 'mouvoulouharvey@gmail.com' , Telephone:'0033605837471',
  Adresse:'23 bis rue du general schmitz', CodePostal:'95300' , Ville:'Pontoise' , Pays:'France', Fonction:'Consultant etudes et developpement PHP/JS', 
  Competence:'PHP/SYMFONY/ANGULAR/REACT' , Promotion:'2010-2016' , DiplomeObtenu:'Master CSI'},
  { id: 4, Nom: 'NGAKOSSO MASS ', Prenom: 'Levis Saint-Clair', Email: 'lscngakosso@gmail.com', Telephone:'0033605837471',
  Adresse:'23 bis rue du general schmitz', CodePostal:'95300' , Ville:'Pontoise' , Pays:'France', Fonction:'Consultant etudes et developpement PHP/JS', 
  Competence:'PHP/SYMFONY/ANGULAR/REACT' , Promotion:'2010-2016' , DiplomeObtenu:'Master CSI'},
  { id: 5, Nom: 'MOUKANA MEYA', Prenom: 'Christ Espira', Email: 'meyaespira@gmail.com', Telephone:'0033605837471',
  Adresse:'23 bis rue du general schmitz', CodePostal:'95300' , Ville:'Pontoise' , Pays:'France', Fonction:'Consultant etudes et developpement PHP/JS', 
  Competence:'PHP/SYMFONY/ANGULAR/REACT' , Promotion:'2010-2016' , DiplomeObtenu:'Master CSI'},
  { id: 6, Nom: 'BATSOTSA', Prenom: 'Paul Ghislain', Email: 'ghisbatnew@gmail.com' , Telephone:'0033605837471',
  Adresse:'23 bis rue du general schmitz', CodePostal:'95300' , Ville:'Pontoise' , Pays:'France', Fonction:'Consultant etudes et developpement PHP/JS', 
  Competence:'PHP/SYMFONY/ANGULAR/REACT' , Promotion:'2010-2016' , DiplomeObtenu:'Master CSI'},
  { id: 7, Nom: 'BOUNGOU', Prenom: 'fidele cheribeau', Email: 'boungoufidele@gmail.com', Telephone:'0033605837471',
  Adresse:'23 bis rue du general schmitz', CodePostal:'95300' , Ville:'Pontoise' , Pays:'France', Fonction:'Consultant etudes et developpement PHP/JS', 
  Competence:'PHP/SYMFONY/ANGULAR/REACT' , Promotion:'2010-2016' , DiplomeObtenu:'Master CSI'},
  { id: 8, Nom: 'GAMOKANZE', Prenom: 'Pierre Phryslein', Email: 'gphryslein@gmail.com', Telephone:'0033605837471',
  Adresse:'23 bis rue du general schmitz', CodePostal:'95300' , Ville:'Pontoise' , Pays:'France', Fonction:'Consultant etudes et developpement PHP/JS', 
  Competence:'PHP/SYMFONY/ANGULAR/REACT' , Promotion:'2010-2016' , DiplomeObtenu:'Master CSI'},
  { id: 9, Nom: 'BANGA',Prenom: 'Jovial Bodenan', Email: 'jovialbanga@gmail.com', Telephone:'0033605837471',
  Adresse:'23 bis rue du general schmitz', CodePostal:'95300' , Ville:'Pontoise' , Pays:'France', Fonction:'Consultant etudes et developpement PHP/JS', 
  Competence:'PHP/SYMFONY/ANGULAR/REACT' , Promotion:'2010-2016' , DiplomeObtenu:'Master CSI'},
];


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  backgroundImg: {
    margin: "auto",
    backgroundSize: "cover",
    width: "100%",
    height: "300px",
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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
      <Footer />
    </div>
  );
}
