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

// const animalRecord1 = {
//     "name": "Dog From the UI",
//     "breed": "Dog",
//     "good_with_animals": true,
//     "good_with_children": true,
//     "must_be_leashed": false,
//     "availability": "Available",
//     "description": "Most loveable pit bull on the planet",
//     "date_created": "04/28/2022",
//     "age": 12,
//     "age_descriptor": "years",
//     "filesystem_location": "src/images/some_oid.jpeg",
//     "shelter_oid": "6254368a11c4ca8be3b22ad1"
// }

// const animalUpdate1 = {
//     "_id": "626b3c9ee92cb1b5ba4e36fe",
//     "name": "Chomper (name updated via UI)"
// }

// function someCallbackHandler(data) {
//     console.log(data);
// }

// this function operates asyncronously
// it allows the remainder of the JavaScript in the browser to function while the call to db is made
// within this function, it waits for the db call to resolve before passing results into 
async function search() {
    var results = await queries.query_findMany('Animals', {name: 'Otus', breed: 'Cat'});
    // pass results into the function here
}

function SearchPage(props) {
    const speciesOptions = ["Dog", "Cat", "Other"];
    // const animalsCollection = 'Animals';
    // const animalsQuery4 = {shelter_oid: '6254368a11c4ca8be3b22ad1'}

    // Search param states
    const [optBreed, setOptBreed] = React.useState("");
    const [optAvail, setOptAvail] = React.useState("")
    const [optGoodWithAnimals, setOptGoodWithAnimals] = React.useState(false);
    const [optGoodWithChildren, setOptGoodWithChildren] = React.useState(false);
    const [optLeashedAtAllTimes, setOptLeashedAtAllTimes] = React.useState(false);

    // Search result states
    const [searchResults, setSearchResults] = React.useState([]);

    const search = () => {
        console.log("SEARCH PREFS:", searchPref);
        queries.query_findMany('Animals', searchPref).then(
            (res) => processSearchResults(res.data)
        )
    }
    // generate rand num in range
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    //filter search results to have only a few items as opposed to entire db
    const processSearchResults = (results) =>{
        let numItems = 0;
        // if no results do nothing
        if (results.length === 0){
            return {}
        }
        // determine item count to render based on result size
        if (results.length < 10){
            numItems = results.length - 1;
        }
        else{
            numItems = 10;
        }
        //track animals already picked to not have repeats
        let pickedIdx = []
        let idx = 0;
        let tempObj = {}
        // will display no more than 10 items on the user dashboard, user can search if they want more
        for(let i = 0; i < results.length && i < numItems; i++){
            //randomize what animals are chosen 
            while (pickedIdx.includes(idx)){
                idx = getRandomInt(results.length - 1);
            }
            tempObj[idx]= results[idx];
            pickedIdx.push(idx);
        }
        console.log("Processed results for userDashboard are...");
        console.log(tempObj);
    }

    return (
        <div className='search-page'>
            <Container className='search-container' maxwidth='sm' sx={{p:2, mt:2.5}}>
                <Box className='search-box' sx={{p:2}}>
                    <Box className='search-box' sx={{pt:2}}>
                        <Stack className='searchFieldsRow3' direction='row' spacing={2} justifyContent='center' alignItems='center'>
                            {/* This button will call and console log query_findMany */}
                            <Button variant='contained' onClick={ () => {
                                        // Search handler. Sets data.
                                        search();                                           

                                    }
                                }>Search</Button>
                        </Stack>
                    </Box>
                </Box>
                <SearchResults searchRes={searchResults}/>
            </Container>
        </div>
    )
}

export default SearchPage;