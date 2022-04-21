import React from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import NavBar from '../components/NavBar/NavBar';

import '../styles/SearchPage.css';

function SearchPage(props) {
    const speciesOptions = ["Dog", "Cat", "Other"];

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
                            <Button variant='contained'>Search</Button>
                        </Stack>
                    </Box>
                </Box>
                <Divider sx={{p:1}}/>
            </Container>
            
        </div>
    )
}

export default SearchPage;