import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function Carousell(props) {
    const items = [
        {
            name: 'Anmial 1',
            description: 'Dog',
        },
        {
            name: 'Animal 2',
            description: 'Cat',
        },
        {
            name: 'Animal 3',
            description: 'dog',
        },
    ];

    return (
        <Carousel autoPlay>
            {props.map((item, i) => (
                <Item key={i} {...item} />
            ))}
        </Carousel>
    );
}
const Item = ({name, description}) => {
    return (
        <Paper>
            <h2>{name}</h2>
            <p>{description}</p>
        </Paper>
    );
};

export default Carousell