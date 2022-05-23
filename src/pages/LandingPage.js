import NavBar from "../components/NavBar/NavBar";
import ImageAvatar from "../components/ImageAvatar/ImageAvatar.js";
import ImageAvatarCrud from "../components/ImageAvatar/ImageAvatarCrudCard";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import UploadPhoto from "../components/UploadPhotoButton/UploadPhoto";
import { StyledEngineProvider } from "@mui/material/styles";
import "../App.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormsComponents from "../components/FormInput/FormsComponents";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import AdminCrudCard from "../components/AdminCrudCard/AdminCrudCard";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Carousel from "../components/Carousel/Carousel";
import { useEffect } from 'react';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
//import { useForm } from "react-hook-form";
import Typography from '@mui/material/Typography';
import Dashboard from "./DashboardHandler";

import { useCookies } from 'react-cookie';

const queries = require('../utils/queries');

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#5584AC" : "#FFFFFF",
  ...theme.typography.body2,
  padding: theme.spacing(20),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#5584AC" : "#5584AC",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "5px",
}));

const Item3 = styled(Container)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(20),
  display: "flex",
  flexDirection: "column",
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
}));

function LandingPage() {
    const [cookies, setCookies] = useCookies(['isLoggedIn', 'isAdmin', 'userData']);
 
    const location = useLocation();

    const [picObj, setPicObj] = useState([]);

    //populates the table component with data from the DB
    const loadAnimals = async () => {
        console.log("Results of GET are....");
        let results = await queries.query_findMany("Animals", {})
            .then((res) => getCarouselImages(res.data) )
    }

    const imagesForCarousel = []
    const getCarouselImages = (results) =>{
        //extract images and store 
        for(let i = 0; i < results.length; i++){
          // deal with any missing images
            if (typeof results[i].image === 'undefined'){
              continue;
            }
            else{
              imagesForCarousel.push(results[i].image);
              //imagesForCarousel[i] = results[i].image;
            }
        }
        console.log("images for carousel are...");
        console.log(imagesForCarousel);
        setPicObj(imagesForCarousel)

    }

  // trigger render on load
    useEffect(() => {
        console.log("Inside use effect")
        loadAnimals();
    }, []);


  // for nav back to dashboard on submit
  // const history = useNavigate();
  if (cookies["isLoggedIn"] === "true") {
    return <Dashboard />;
  }
  return (
     <Item3>
       <React.Fragment>
        <Grid container columnSpacing={9}>

          {/* <Grid xs={1}></Grid> */}

          <Grid item md={6}>
            <Item>
              <Typography variant="h3" gutterBottom> Welcome to Pet Connect! </Typography>
              <Typography variant="h6" gutterBottom> Find your dream pet today </Typography>
              <Link to="/SignInPage"> <Button size="large" variant="contained">Get Started</Button></Link >
            </Item>
           
          </Grid>
          <Grid item md={6}>
            
              <Carousel images={ picObj }></Carousel>
           
          </Grid>

          {/* <Grid xs={1}></Grid> */}

        </Grid>
        </React.Fragment>
       </Item3> 
    
  );
}



{/* <Grid container columnSpacing={1}>
<Grid item xs={1}></Grid>
<Item3>
  
<Divider orientation="vertical" flexItem>
VERTICAL
</Divider>
    <Typography variant="h4" gutterBottom> Welcome </Typography>
    <Carousel images={ imagesForCarousel }></Carousel>

</Item3>


<Grid item container xs={1}></Grid>
</Grid> */}
export default LandingPage;
