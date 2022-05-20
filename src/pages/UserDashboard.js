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
import { createMuiTheme } from '@mui/material/styles';
import '../styles/SearchPage.css';
import { ConstructionOutlined } from '@mui/icons-material';

const queries = require('../utils/queries');


// this function operates asyncronously
// it allows the remainder of the JavaScript in the browser to function while the call to db is made
// within this function, it waits for the db call to resolve before passing results into 
async function search() {
    var results = await queries.query_findMany('Animals', {name: 'Otus', breed: 'Cat'});
    // pass results into the function here
}

function UserDashboard(props) {

    // Search result states
    const [searchResults, setSearchResults] = React.useState([]);

    const search = () => {
        console.log("SEARCH PREFS:", {});
        queries.query_findMany('Animals', {}).then(
            (res) => processSearchResults(res.data)
        )
    };

    // generate rand num in range
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    };

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
        let tempObj = []
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
        setSearchResults(tempObj)
        console.log("prop to be passed is ...")
        console.log(searchResults)
    };

      // trigger db load and render on page load
    useEffect(() => {
        console.log("Inside use effect")
        search();
    }, []);

    const arcBlue = "#0B72B9";
    const arcOrange = "#FFBA60";
    


    return (
        <div className='search-page'>
            <Container className='search-container' maxwidth='sm' sx={{p:2, mt:2.5}}>
                <Typography variant="h4" gutterBottom> Welcome user_name! Here's a list of some local pets </Typography>
                <Typography variant="h6-" gutterBottom> Try out search feature if you want to see more </Typography>
                <SearchResults searchRes={searchResults}/>
            </Container>
        </div>
    )
}

export default UserDashboard;