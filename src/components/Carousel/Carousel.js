import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
const Item = ({image}) => {
    return (
        <Box   sx={{
            width: 300,
            height: 300}}>
            <img src={image} />
        </Box>
    );
};
function Carousell({images}) {
    console.log("carousel props are");
    console.log(images)
   //convert incoming props into arr
   let picArray = [];
   for (var key of Object.keys(images)){
        picArray.push(images[key])
   }
   console.log("Pic array is...");
   console.log(picArray)

    return (
        <Carousel autoPlay>
            {images.map((image, i) => (
                <Item key={i} image={image} />
            ))}
        </Carousel>
    );
}


export default Carousell