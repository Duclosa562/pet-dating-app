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
import ProfileCard from '../components/AdminCrudCard/AdminCrudCard';
//import Database from '../temp_db/db_examples';
const queries = require('../utils/queries');

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#95D1CC' : '#FAFFAF',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const animalsCollection = 'Animals';

const animalRecord1 = {
    "name": "Roxy",
    "breed": "Dog",
    "good_with_animals": false,
    "good_with_children": true,
    "must_be_leashed": true,
    "availability": "Not Available",
    "description": "American Dingo",
    "date_created": "04/19/2022",
    "age": 12,
    "age_descriptor": "years",
    "filesystem_location": "src/images/some_oid.jpeg",
    "shelter_oid": "6254368a11c4ca8be3b22ad1"
}


function AdminDashboard({setAnimalToEdit}) {
    // function createData(ageDescriptor, name, age, breed, description, availability, goodWithAnimals, goodWithChildren, mustBeLeashed) {
    //     return {ageDescriptor, name, breed, age, description, availability, goodWithAnimals, goodWithChildren, mustBeLeashed};
    //   };
    // const animals = [
    //     createData("Months", 'Otis', 3, "Dog", "A cute dog.", "Adopted", "False", "True", "True", "True"),
      
    //   ];


    const [animals, setAnimals] = useState([]);


    // State hook to manage animal data
    // const [animals, setAnimals] = useState([]);
    const navigate = useNavigate();

    //populates the table component with data from the DB
    const loadAnimals = async () => {
        console.log("Results of GET are....");
        let results = await queries.query_findMany("Animals", {})
            .then((res) => setAnimals(res.data) )

        //console.log(results)
        // setAnimals(results.json())
        // const response = await fetch('/animals', {method: 'GET'});
        //const data = await response.json();
        //setAnimals(data);

    }

    // trigger render on load
    useEffect(() => {
        console.log("Inside use effect")
        loadAnimals();
    }, []);


    // function to delete an Animal from the DB, re-renders the table too 
    const onDeleteAnimal = async (_id) => {

        console.log("Results of DEL are....");
        console.log("ID is ")
        console.log(_id)
        let results = await queries.query_deleteOne("Animals", _id)
            // add error handler here somehow now sure
            .then((res) => {
                // console.log("ON DEL RESP IS: ") ??? Where am I supposed to get an error from?
                // console.log(res)
                // if(res.status === 204){
                //     // reload the table
                    loadAnimals()
                // }
                // else{
                //     // need to send status here??
                //     console.error("Failed to Delete Animal")
                // }
            }

         )
    }


    
    // navigation hook to set open admin crud page when clicking on the edit button on the dashboard
    const onEditAnimal = async (row) => {

        navigate("/AdminEdit", {state: row, replace: true})

        //setAnimalToEdit(animal);
    //     console.log("In onEditAnimal, row is...")
    //     console.log(row)
    //     navigate("/AdminEdit", {state: row, replace: true})
     }

    return (
    <div>
        {/* <NavBar/> */}
       {/* <ImageAvatar/> */}
        {/* <Box sx={{ flexGrow: 1 }} direction="column" justifyContent="center"> */}
            <Grid container spacing={1}> 
                <Grid item xs={1}>
                </Grid>
                <Grid item container xs={10} direction="column" alignItems="center" justifyContent="center">
                    <Box sx={{ width: '100%' }}>
                        <Stack spacing={5}>
                            <Item><Typography sx={{fontSize: {lg: 30, md: 20, sm: 15, xs: 10}}}>Welcome Back, Shelter_Name!</Typography></Item>
                            <Link to="/AdminCRUD"><Button size="large" variant="contained">Create New Animal</Button></Link >
                            <Table animals={animals} onDeleteAnimal={onDeleteAnimal} onEditAnimal={onEditAnimal}></Table>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item container xs={1}
                    direction="column"
                    alignItems="top"
                    justifyContent="top">
                    {/* <Link to="/AdminCRUD"><Button size="large" variant="contained">Create New Animal</Button></Link > */}
                </Grid>
            </Grid>
        {/* </Box> */}
    </div>  
    )
}

export default AdminDashboard