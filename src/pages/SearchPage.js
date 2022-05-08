import React from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import NavBar from '../components/NavBar/NavBar';
import SearchResults from '../components/SearchResults/SearchResults';

import '../styles/SearchPage.css';

const queries = require('../utils/queries');

const animalRecord1 = {
    "name": "Dog From the UI",
    "breed": "Dog",
    "good_with_animals": true,
    "good_with_children": true,
    "must_be_leashed": false,
    "availability": "Available",
    "description": "Most loveable pit bull on the planet",
    "date_created": "04/28/2022",
    "age": 12,
    "age_descriptor": "years",
    "filesystem_location": "src/images/some_oid.jpeg",
    "shelter_oid": "6254368a11c4ca8be3b22ad1"
}

const animalUpdate1 = {
    "_id": "626b3c9ee92cb1b5ba4e36fe",
    "name": "Chomper (name updated via UI)"
}

function someCallbackHandler(data) {
    console.log(data);
}

// this function operates asyncronously
// it allows the remainder of the JavaScript in the browser to function while the call to db is made
// within this function, it waits for the db call to resolve before passing results into 
async function search() {
    var results = await queries.query_findMany('Animals', {name: 'Roxy'});
    // pass results into the function here
}

function SearchPage(props) {
    const speciesOptions = ["Dog", "Cat", "Other"];
    const animalsCollection = 'Animals';
    const animalsQuery4 = {shelter_oid: '6254368a11c4ca8be3b22ad1'}
    async function searchHereMightWork() {
        var results = await queries.query_findMany('Animals', {name: 'Roxy'});
        console.log(results);
    }

    return (
        <div className='search-page'>
            <NavBar />
            <Container className='search-container' maxwidth='sm' sx={{p:2, mt:2.5}}>
                <Box className='search-box' sx={{p:2}}>
                    <Stack className='searchFieldsRow1' direction='row' spacing={2} justifyContent='center' alignItems='center'>
                        <Stack direction='row' spacing={1} justifyContent='center' alignItems='center'>
                            <h3>Species:</h3>
                            <Autocomplete
                            disablePortal
                            clearOnEscape
                            options={speciesOptions}
                            renderInput={(params) => <TextField {...params} label="Select a Species"/>}
                            sx={{width:300}}
                            />
                        </Stack>
                        <Stack direction='row' spacing={1} justifyContent='center' alignItems='center'>
                            <h3>Status:</h3>
                            <Autocomplete
                            disablePortal
                            clearOnEscape
                            options={["Available", "Adopted", "Fostered"]}
                            renderInput={(params) => <TextField {...params} label="Select a Status"/>}
                            sx={{width:300}}
                            />
                        </Stack>
                    </Stack>
                    <Stack className='searchFieldsRow2' direction='row' spacing={2} justifyContent='center' alignItems='center'>
                        <Stack direction='row' spacing={0} justifyContent='center' alignItems='center'>
                            <h3>Good with other animals</h3>
                            <Checkbox />
                        </Stack>
                        <Stack direction='row' spacing={0} justifyContent='center' alignItems='center'>
                            <h3>Good with children</h3>
                            <Checkbox />
                        </Stack>
                        <Stack direction='row' spacing={0} justifyContent='center' alignItems='center'>
                            <h3>Animal must be leashed at all times</h3>
                            <Checkbox />
                        </Stack>
                    </Stack>
                    <Box className='search-box' sx={{pt:2}}>
                        <Stack className='searchFieldsRow3' direction='row' spacing={2} justifyContent='center' alignItems='center'>
                            {/* This button will call and console log query_findMany */}
                            <Button variant='contained' onClick={ () => { 
                                        queries.query_findOne('Animals', {"breed": "Cat", "name": "Otus", "good_with_animals": "false"}).then(
                                            (data) => someCallbackHandler(data)
                                        )
                                    }
                                }>Search</Button>
                        </Stack>
                    </Box>
                </Box>
                <SearchResults searchRes={[1, 2, 3, 4, 5, 6]}/>
            </Container>
        </div>
    )
}

export default SearchPage;