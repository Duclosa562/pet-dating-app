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
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { useLocation } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ConstructionOutlined } from '@mui/icons-material';
// import Avatar from '../components/ImageAvatar/ImageAvatar';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuItem from "@mui/material/MenuItem";
import Slider from "@mui/material/Slider";
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '../components/ImageAvatar/ImageAvatarEdit';
const queries = require('../utils/queries');





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#4fc3f7' : '#FAFAFA',
  ...theme.typography.body3,
  padding: theme.spacing(10),
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  width: "75%",
  color: theme.palette.text.secondary,
  
}));

const Item3 = styled(Container)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(12),
  display: "flex",
  flexDirection: "column",
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
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



function AdminEdit({animal}) {
    const location = useLocation();
    console.log("location %s", JSON.stringify(location))
    console.log("animal on the Edit Page is...")
    animal = location.state
    console.log(animal)


    const [name, setName] = useState(animal.name);
    const [age, setAge] = useState(animal.age);
    const [ageUnits, setAgeUnits] = useState(animal.age_descriptor);
    const [breed, setBreed] = useState(animal.breed);
    const [avail, setAvail] = useState(animal.availability);
    const [descr, setDescr] = useState(animal.description);


    // will need a handle for the disposition to get this set properly
    const [goodWithAnimals, setGoodWithAnimals] = useState(animal.good_with_animals);
    const [goodWithChildren, setGoodWithChildren] = useState(animal.good_with_children);
    const [mustBeLeashed, setMustBeLeashed] = useState(animal.must_be_leashed);

    const [disp, setDisp] = useState([])
    
    console.log(String(animal.good_with_animals))


    //not sure how to handle this one
    const [img, setImg] = useState(animal.image);


    // for nav back to dashboard on submit
    const history = useNavigate();

    const submitHandler = async () => {
        const animalId = animal._id;

        const animalTest = { _id:animalId, 
            name:name, age:age, age_descriptor:ageUnits, breed:breed, 
            availability:avail, description:descr, good_with_animals:goodWithAnimals, 
            good_with_children:goodWithChildren, must_be_leashed:mustBeLeashed, image:img}

        if (animalTest.good_with_animals === 'true')
            animalTest.good_with_animals = true;
        else{
            animalTest.good_with_animals = false;
        }
        if (animalTest.good_with_children === 'true'){
            animalTest.good_with_children = true;
        }
        else{
            animalTest.good_with_children = false;
        }
        if (animalTest.must_be_leashed === 'true'){
            animalTest.must_be_leashed = true;
        }
        else{
            animalTest.must_be_leashed = false;
        }
        
            // console.log(animalTest)
        console.log("inside edit submit handler")
        console.log("Animal test is ")
        console.log(animalTest)
        let results = await queries.query_updateOne("Animals", animalTest)
            .then((res) => console.log(res) )

        history('/AdminDashboard')

    }


    const Input = styled('input')({
        display: 'none',
      });

    function getBase64(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          console.log(reader.result);
          setImg(reader.result);
          return reader.result;
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
    }

    const imgSubmitHandler = async (event) => {
        console.log("Inside image handler, event is: ");
        console.log(event);
        event.preventDefault();
        let encodedImg = getBase64(event.target.files[0]);
        console.log("encoded Img data is: ");
        console.log(encodedImg);
        //setImg(encodedImg);

    }




    return (
      <Item3>
      <Item justifyContent='center' alignItems="center">
        <React.Fragment>
        <Typography variant="h4" gutterBottom>
          Edit {name}'s Profile
        </Typography>
        <Grid container spacing={3} >
          <Grid item xs={12}   align = "center" justify = "center" alignItems = "center">
          <Avatar props={img} sx={{ width: 256, height: 256 }}></Avatar>

          </Grid>
          <Grid item xs={12}   align = "center" justify = "center" alignItems = "center">
                <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" 
                multiple type="file" onChange={(event) => imgSubmitHandler(event)}/>
                            <Button variant="contained" component="span">Upload Profile Picture</Button>
                </label>
          </Grid>
          <Grid item xs={12} md={6}>
          <label> Name: </label>
            <TextField
              required
              id="cardName"
              label=""
              value={name}
              onChange={e => setName(e.target.value)}
              fullWidth
              autoComplete="cc-name"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} md={6}>
          <label> Age: </label>
            <TextField
              required
              id="cardNumber"
              label=""
              value={age}
              onChange={e => setAge(e.target.value)}
              fullWidth
              autoComplete="cc-number"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
          <label> Description: </label>
            <TextField
                fullWidth
                multiline
                rows={8}
                required
                id="outlined-required"
                label="Enter Something Fun"
                value={animal.description}
                variant="filled"
                onChange={e => setDescr(e.target.value)}
                />
          </Grid>
          <Grid item xs={12} md={2}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Age Units</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Weeks"
                    name="ageDescripterAdd"
                    value={ageUnits}
                    onChange={e => setAgeUnits(e.target.value)}>
                    <FormControlLabel value="Years" control={<Radio />} label="Years" />
                    <FormControlLabel value="Months" control={<Radio />} label="Months" />
                    <FormControlLabel value="Weeks" control={<Radio />} label="Weeks" />
                </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Breed:</FormLabel>
              <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue=""
                  name="breedAdd"
                  value={breed}
                  onChange={e => setBreed(e.target.value)}>
                  <FormControlLabel value="Cat" control={<Radio />} label="Cat" />
                  <FormControlLabel value="Dog" control={<Radio />} label="Dog" />
                  <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Good With Animals?</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Weeks"
                name="dispositionAdd"
                value={String(animal.good_with_animals)}
                onChange={e => setGoodWithAnimals(e.target.value)}>
                <FormControlLabel value="true" control={<Radio />} label="Yes" />
                <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Good With Kids?</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Weeks"
                name="dispositionAdd"
                value={String(animal.good_with_children)}
                onChange={e => setGoodWithChildren(e.target.value)}>
                <FormControlLabel value="true" control={<Radio />} label="Yes" />
                <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Must Be Leashed?</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Yes"
                name="dispositionAdd"
                value={String(mustBeLeashed)}
                onChange={e => setMustBeLeashed(e.target.value)}>
                <FormControlLabel value="true" control={<Radio />} label="Yes" />
                <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
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
          </Grid>
          <Grid item xs={12}>
            {/* <Button variant='contained'onClick={() => submitHandler()}>Submit</Button> */}
          </Grid>
        </Grid>
      </React.Fragment>
          <Button variant='contained'onClick={() => submitHandler()}>Submit</Button>
      </Item>
      </Item3>

        // </div>
    
    )
}

export default AdminEdit