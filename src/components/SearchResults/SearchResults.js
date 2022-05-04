import {Grid, Divider} from "@mui/material";

import SearchCard from "../SearchCard/SearchCard";

function SearchResults({searchRes}) {
    console.log("IN searchRESU", searchRes)
    if (!searchRes || searchRes.length === 0 ) {
        return (<div></div>)
    }
    else {
        // let newResults = [];
        // newResults = searchRes.map((value) => value);
        return (
            <div>
                <Divider sx={{p:1}}/>
                <Grid container columns={{xs:2, md: 3}} sx={{mt:3}}>
                    {searchRes.map((item, index) => <Grid item key={index} ><SearchCard /></Grid>)}
                </Grid>
            </div>
            
        )
    }
} 

export default SearchResults;