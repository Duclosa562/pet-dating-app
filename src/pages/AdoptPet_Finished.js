import React from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import Typography from '@mui/material/Typography';

import NavBar from '../components/NavBar/NavBar';
import SearchResults from '../components/SearchResults/SearchResults';
import { useCookies } from 'react-cookie';

import { ConstructionOutlined } from '@mui/icons-material';

import { useLocation, useNavigate } from "react-router-dom";
import ImageAvatar from '../components/ImageAvatar/ImageAvatar';

const queries = require('../utils/queries');


function AdoptPet_Finished({pet}) {
    // page will not load with {pet} either -_-

    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;
    // console.log('data');     
    // console.log(data);      // nope
    // console.log('pet');     
    // console.log(pet);      // nope
    console.log('location.state');     
    console.log(location.state);

    //console.log(navigate.arguments);  // page will not load

    //console.log('pet = ');
    //console.log(pet);       // it's still null

    const [cookies, setCookies] = useCookies(['isLoggedIn', 'isAdmin', 'userData']);
    const accountData = cookies["userData"];

    

    // generate rand num in range
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    };

    //filter search results to have only a few items as opposed to entire db

    return (
        <div className='search-page'>
            <Container className='search-container' maxwidth='sm' sx={{p:2, mt:2.5}} alignItems='center' align='center'>
                <br></br>
                <ImageAvatar image={location.state.image} /><br></br><br></br>
                <Typography variant="h4" gutterBottom> Thank you {accountData.first_name} for submitting in an application to adopt {location.state.name}! </Typography>
                <Typography variant="h6-" gutterBottom> </Typography>
                <br></br>
            </Container>
        </div>
    )
}

export default AdoptPet_Finished;