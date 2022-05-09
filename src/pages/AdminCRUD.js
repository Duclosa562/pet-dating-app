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

function AdminCreate() {
    const location = useLocation();
    //console.log("location %s", JSON.stringify(location))
    console.log("animal on the Create Page is...")
    //animal = location.state
    ///console.log(animal)


    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [ageUnits, setAgeUnits] = useState("Weeks");
    const [breed, setBreed] = useState();
    const [avail, setAvail] = useState();
    const [descr, setDescr] = useState();


    // will need a handle for the disposition to get this set properly
    const [goodWithAnimals, setGoodWithAnimals] = useState();
    const [goodWithChildren, setGoodWithChildren] = useState();
    const [mustBeLeashed, setMustBeLeashed] = useState();

    const [disp, setDisp] = useState([])


    //not sure how to handle this one
    const [imgPath, setImgPath] = useState();


    // for nav back to dashboard on submit
    const history = useNavigate();

    const submitHandler = () => {
        const animalTest = {name, age, ageUnits, breed, avail, descr, goodWithAnimals, goodWithChildren, mustBeLeashed, disp, imgPath}
        console.log(animalTest)
        history('/AdminDashboard')
    }


    //called by submit form button below, sends edit data to REST and gets edited json back
    const createAnimal = async () => {
        const createAnimal = {name, age, ageUnits, breed, avail, descr, goodWithAnimals, goodWithChildren, mustBeLeashed, disp, imgPath};
        const response = await fetch(`/animalsCreate`, {
            method: 'POST',
            body : JSON.stringify(createAnimal),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200){
            alert("Successfully Created an Existing Animal!");
        }
        else{
            alert(`Failed to Create a New Animal, status code = ${response.status}`);
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
                    {/* <AdminCrudCard ></AdminCrudCard> */}
                    <Card >
                <CardHeader title='Create a New Animal'/>
                <CardContent classes='pet-content'  direction="column" alignItems="center" justifyContent="center"> 
                    {/* <Item><FormsComponents/> */}
                    <Item>
                    <Box  justifyContent="center" sx={{ flexGrow: 1,
                width: '100%' }}>
      <Stack spacing={2}>
        <Item2>
            <label> Name: </label>
            <div>
            <TextField
              required={true}
              id="outlined-required"
              label="Enter a Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            </div>
            {/* <FormInputName onChange={e => setName(e.target.value)}/> */}
        </Item2>
        <Item2>
            <label> Age: </label>
            <div>
            <TextField
              required
              id="outlined-required"
              label="Enter A Number"
              value={age}
              onChange={e => setAge(e.target.value)}
            />
            </div>
            {/* <FormInputAge onChange={e => setAge(e.target.value)}/> */}
        </Item2>
        <Item2>
            {/* <label> Age Units: </label> */}
            <div>
            {/* <TextField
              required
              id="outlined-required"
              label="Required"
              value={ageUnits}
              onChange={e => setAgeUnits(e.target.value)}
            /> */}
             <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Age Descriptor</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Weeks"
                    name="ageDescripterAdd"
                    value={ageUnits}
                    onChange={e => setAgeUnits(e.target.value)}
                >
                    <FormControlLabel value="Years" control={<Radio />} label="Years" />
                    <FormControlLabel value="Months" control={<Radio />} label="Months" />
                    <FormControlLabel value="Weeks" control={<Radio />} label="Weeks" />
                </RadioGroup>
            </FormControl>
            </div>
            {/* <DropDownMenuAgeUnits onChange={e => setAgeUnits(e.target.value)}/> */}
        </Item2>
        <Item2>
            <label> Breed: </label>
            <div>
            <TextField
              required
              id="outlined-required"
              label="Enter a Breed Type"
              value={breed}
              onChange={e => setBreed(e.target.value)}
            />
            </div>
            {/* <FormInputBreed onChange={e => setBreed(e.target.value)}/> */}
        </Item2>
        <Item2>
            <label> Description: </label>
            <div>
            <TextField
             multiline
             rows={8}
              required
              id="outlined-required"
              label="Enter Something Fun"
              value={descr}
              onChange={e => setDescr(e.target.value)}
            />
            </div>
            {/* <FormInputDescription justifyContent="center" onChange={e => setDescr(e.target.value)}></FormInputDescription> */}
        </Item2>
        <Item2>
            <label> Disposition: </label>
            <div>
            {/* <TextField
              required
              id="outlined-required"
              label="Required"
              value={disp}
              onChange={e => setDisp(e.target.value)}
            /> */}
            <Grid>
                <Grid>
                    <Item2>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Good With Animals?</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Weeks"
                            name="dispositionAdd"
                            value={goodWithAnimals}
                            onChange={e => setGoodWithAnimals(e.target.value)}
                        >
                            <FormControlLabel value="True" control={<Radio />} label="Yes" />
                            <FormControlLabel value="False" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                    </Item2>
                </Grid>
                <Grid>
                    <Item2>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Good With Kids?</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Weeks"
                            name="dispositionAdd"
                            value={goodWithChildren}
                            onChange={e => setGoodWithChildren(e.target.value)}
                        >
                            <FormControlLabel value="True" control={<Radio />} label="Yes" />
                            <FormControlLabel value="False" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                    </Item2>
                </Grid>
                <Grid>
                    <Item2>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Must Be Leashed?</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Weeks"
                            name="dispositionAdd"
                            value={mustBeLeashed}
                            onChange={e => setMustBeLeashed(e.target.value)}
                        >
                            <FormControlLabel value="True" control={<Radio />} label="Yes" />
                            <FormControlLabel value="False" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                    </Item2>
                </Grid>
            </Grid>
              

            </div>
            {/* <DropDownMenuAge onChange={e => setName(e.target.value)}/> */}
        </Item2>
        <Item2>
            {/* <label> Availability: </label> */}
            <div>
            {/* <TextField
              required
              id="outlined-required"
              label="Required"
              value={avail}
              onChange={e => setAvail(e.target.value)}
            /> */}
                <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Availability:</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Weeks"
                    name="availabilityAdd"
                    value={avail}
                    onChange={e => setAvail(e.target.value)}
                >
                    <FormControlLabel value="Adopted" control={<Radio />} label="Adopted" />
                    <FormControlLabel value="Available" control={<Radio />} label="Available" />
                    <FormControlLabel value="Not Available" control={<Radio />} label="Not Available" />
                </RadioGroup>
            </FormControl>
            </div>
            {/* <AvailCheckbox onChange={e => setAvail(e.target.value)}/> */}
        </Item2>
      </Stack>
    </Box>
            
            
            
            
            </Item>
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
    
    )

}

export default AdminCreate