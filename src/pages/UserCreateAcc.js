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

function UserCreateAcc() {
    const location = useLocation();
    //console.log("location %s", JSON.stringify(location))
    //console.log("animal on the Create Page is...")
    //animal = location.state
    ///console.log(animal)


    const [usr, setUsr] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [pw, setPw] = useState("");
    const [email, setEmail] = useState("");

    // not sure if this one will need a use state
    const type = "User";


    // for nav back to dashboard on submit
    const history = useNavigate();

    const submitHandler = () => {
        const accTest = {}
        console.log(accTest)
        history('/AdminDashboard')
    }


    //called by submit form button below, sends edit data to REST and gets edited json back
    const createAcc = async () => {
        const createNewUser = {usr, fname, lname, pw, email, type};
        const response = await fetch(`/createUser`, {
            method: 'POST',
            body : JSON.stringify(createNewUser),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200){
            alert("Successfully Created a new User Account");
        }
        else{
            alert(`Failed to Create a New User Account, status code = ${response.status}`);
        }
        history.push("/AdminDashboard");
    };



    return (
    <div>
        <NavBar/>
        <Grid container columnSpacing={1}>
            <Grid item xs={1}></Grid>
            <Grid item container xs={3} 
            direction="column"
            alignItems="center"
            justifyContent="center">
            <Stack>
                <Box >
                    <ImageAvatarCrud></ImageAvatarCrud>
                </Box>
                <Box >
                    <UploadPhoto></UploadPhoto>
                </Box>
            </Stack>
            </Grid>
            <Grid item container xs={7}>
                <Box sx={{width: "75%"  }}>
                    <Card >
                <CardHeader title='Create a New Admin Account'/>
                <CardContent classes='pet-content'  direction="column" alignItems="center" justifyContent="center"> 
                    <Item>
                    <Box  justifyContent="center" sx={{ flexGrow: 1,
                width: '100%' }}>
      <Stack spacing={2}>
        <Item2>
            <label> Account Name: </label>
            <div>
            <TextField
              required={true}
              id="outlined-required"
              label="Enter an Account Name"
              value={usr}
              onChange={e => setUsr(e.target.value)}
            />
            </div>
        </Item2>
        <Item2>
            <label> First Name: </label>
            <div>
            <TextField
              required
              id="outlined-required"
              label="Enter Your First Name"
              value={fname}
              onChange={e => setFname(e.target.value)}
            />
            </div>
        </Item2>
        <Item2>
            <label> Last Name:  </label>
            <div>
            <TextField
              required
              id="outlined-required"
              label="Enter a Breed Type"
              value={lname}
              onChange={e => setLname(e.target.value)}
            />
            </div>
        </Item2>
        <Item2>
            <label> Set a Password: </label>
            <div>
            <TextField
              required
              id="outlined-required"
              label="Enter A Password"
              value={pw}
              onChange={e => setPw(e.target.value)}
            />
            </div>
        </Item2>
        <Item2>
            <label> Email: </label>
            <div>
            <TextField
              required
              id="outlined-required"
              label="Enter Your Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            </div>
        </Item2>
      </Stack>
    </Box>
            </Item>
        </CardContent>
        <CardActions  direction="column" style={{justifyContent: 'center'}}>
            <Button variant='contained' onClick={() => {submitHandler() }}>Submit</Button>
        </CardActions>
    </Card>
        </Box>
    </Grid>
    <Grid item container xs={1}></Grid>
</Grid>
    </div>
    
    )

}

export default UserCreateAcc;