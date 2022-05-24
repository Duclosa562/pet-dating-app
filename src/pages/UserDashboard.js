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

const queries = require('../utils/queries');


function UserDashboard() {
    const [cookies, setCookies] = useCookies(['isLoggedIn', 'isAdmin', 'userData']);
    const accountData = cookies["userData"];
    // Search result states
    const [searchResults, setSearchResults] = React.useState([]);

    const search = () => {
        console.log("SEARCH PREFS:", {});
        queries.query_userLandingPage(12).then(
            (res) => {
                console.log(res.data);
                processSearchResults(res.data)
            }
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
        if (results.length <= 8){
            numItems = results.length - 1;
        }
        else{
            numItems = 8;
        }
        //track animals already picked to not have repeats
        let pickedIdx = []
        let idx = 0;
        let tempObj = []
        // will display no more than 10 items on the user dashboard, user can search if they want more
        for(let i = 0; i < results.length && i < numItems; i++){
            console.log("Length is : ")
            console.log(results.length)
            //randomize what animals are chosen 
            while (pickedIdx.includes(idx)){
                console.log("In loop")
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

    return (
        <div className='search-page'>
            <Container className='search-container' maxwidth='sm' sx={{p:2, mt:2.5}}>
                <Typography variant="h4" gutterBottom> Welcome {accountData.first_name} {accountData.last_name}! Here's a list of some local pets </Typography>
                <Typography variant="h6-" gutterBottom> Try out search feature if you want to see more </Typography>
                <SearchResults searchRes={searchResults}/>
            </Container>
        </div>
    )
}

export default UserDashboard;