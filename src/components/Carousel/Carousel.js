import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { ClassNames } from '@emotion/react';




const Item = ({image}) => {
    return (
        <Card sx ={{ height: "100%", width:"100%", margin:"auto"}}>
            <CardMedia
            image={image}
            component="img"
            />
            {/* <img src={image} /> */}
        </Card>
           
        
    );
};
function Carousell({images}) {
    console.log("carousel props are");
    console.log(images)
   //convert incoming props into arr
//    let picArray = [];
//    for (const [key, value] of Object.entries(images)){
//        console.log("In here")
//         picArray.push(value)
//    }
   console.log("Pic array is...");
//    console.log(picArray)

    return (
        <Carousel autoPlay>
            {images.map((image, i) => (
                <Item key={i} image={image} />
            ))}
        </Carousel>
    );
}


export default Carousell