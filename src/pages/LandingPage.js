import NavBar from '../components/NavBar/NavBar';
import ImageAvatar from '../components/ImageAvatar/ImageAvatar.js';
import ImageAvatarCrud from '../components/ImageAvatar/ImageAvatarCrudCard';
import ImageGrid from '../components/ImageGrid/ImageGrid';
import UploadPhoto from '../components/UploadPhotoButton/UploadPhoto'
import { StyledEngineProvider } from '@mui/material/styles';
import '../App.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormsComponents from '../components/FormInput/FormsComponents';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import AdminCrudCard from '../components/AdminCrudCard/AdminCrudCard';
import Stack from '@mui/material/Stack';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Carousel from '../components/Carousel/Carousel'
//import { useForm } from "react-hook-form";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#5584AC' : '#22577E',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#5584AC' : '#5584AC',
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: "5px",
  }));

function LandingPage() {
    const location = useLocation();



    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");



    // for nav back to dashboard on submit
    const history = useNavigate();

    const submitHandler = () => {
        const signInAccInfo = {userName, password}
        console.log(signInAccInfo)


        // Acc usr and pw ends up here and the history function below will cause a redirect
        // We will need to add authentication here somehow


        //history('/AdminDashboard')
    }



    return (
    <div>
        <NavBar/>
        <Grid container columnSpacing={1}>
            <Grid item xs={3}></Grid>

            <Grid item container xs={7}>
                <Box sx={{width: "75%"  }}>
                <Carousel></Carousel>
                    <Card >
                        <CardHeader title='Welcome to insert_app_name_here'/>
                        <CardContent classes='landingPage'  direction="column" alignItems="center" justifyContent="center"> 
                            <Item2>
                                <label> Enter User Name and Password: </label>
                                    <div>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Username"
                                            value={userName}
                                            onChange={e => setUserName(e.target.value)}
                                        />
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Password"
                                            value={userName}
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </div>
                            </Item2>
                        </CardContent>
                        <CardActions  direction="column" style={{justifyContent: 'center'}}>
                            <Button variant='contained' onClick={() => submitHandler()}>Submit</Button>
                        </CardActions>
                    </Card>
                </Box>
    </Grid>
    <Grid item container xs={1}></Grid>
    </Grid>

    </div>
    
    );
}

export default LandingPage;