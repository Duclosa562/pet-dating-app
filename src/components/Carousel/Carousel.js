import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

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
const Item = ({image}) => {
    return (
        <Paper>
            <img src={image} />
        </Paper>
    );
};

export default Carousell