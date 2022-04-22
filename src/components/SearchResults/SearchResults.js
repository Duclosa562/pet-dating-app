import {Grid, Divider} from "@mui/material";

import SearchCard from "../SearchCard/SearchCard";

function SearchResults({searchRes}) {
    if (!searchRes) {
        return (<div></div>)
    }
    else {
        return (
            <div>
                <Divider sx={{p:1}}/>
                <Grid container columns={{xs:1, md: 3}} sx={{mt:3}}>
                    {searchRes.map((item, index) => <Grid item key={index} ><SearchCard /></Grid>)}
                </Grid>
            </div>
            
        )
    }
} 

export default SearchResults;