import NavBar from '../components/NavBar/NavBar';
import ImageAvatar from '../components/ImageAvatar/ImageAvatar.js';
import ImageGrid from '../components/ImageGrid/ImageGrid';
import UploadPhoto from '../components/UploadPhotoButton/UploadPhoto'
//import Paper from '../components/PaperContainer/Paper'
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
import { sizing } from '@mui/system';
import Table from '../components/Table/Table'
import { Link } from 'react-router-dom';
import { FormatAlignJustifyRounded } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#95D1CC' : '#FAFFAF',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function AdminDashboard({setAnimalToEdit}) {

    // State hook to manage animal data
    const [animals, setAnimals] = useState([]);
    const history = useNavigate();

    //populates the table component with data from the DB
    const loadAnimals = async () => {
        const response = await fetch('/animals', {method: 'GET'});
        const data = await response.json();
        setAnimals(data);
    }

    // trigger render on load
    useEffect(() => {
        loadAnimals();
    }, []);


    // function to delete an Animal from the DB, re-renders the table too 
    const onDeleteAnimal = async _id => {
        const response = await fetch(`/Animals/${_id}`, {method: 'DELETE'});
        if(response.status === 204){
            const newAnimals = animals.filter(e => e._id !== _id);
            setAnimals(newAnimals);
        } else{
            console.error("Failed to delete Animal")
        }
    }

    const onEditAnimal = async animal => {
        setAnimalToEdit(animal);
        history.pushState("/AdminCRUD")
    }

    return (
    <div>
        <NavBar/>
       {/* <ImageAvatar/> */}
        {/* <Box sx={{ flexGrow: 1 }} direction="column" justifyContent="center"> */}
            <Grid container spacing={1}> 
                <Grid item xs={1}>
                </Grid>
                <Grid item container xs={10} direction="column" alignItems="center" justifyContent="center">
                    <Box sx={{ width: '100%' }}>
                        <Stack spacing={5}>
                            <Item><Typography sx={{fontSize: {lg: 30, md: 20, sm: 15, xs: 10}}}>Welcome Back, Shelter_Name!</Typography></Item>
                            <Table animals={animals} onDelete={onDeleteAnimal}></Table>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item container xs={1}
                    direction="column"
                    alignItems="center"
                    justifyContent="center">
                    <Link to="/AdminCRUD"><Button size="large" variant="contained">Create New Animal</Button></Link >
                </Grid>
            </Grid>
        {/* </Box> */}
    </div>  
    )
}

export default AdminDashboard