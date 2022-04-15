import NavBar from '../components/NavBar/NavBar';
import Avatar from '../components/Avatar/Avatar.js';
import ImageGrid from '../components/ImageGrid/ImageGrid';
import { StyledEngineProvider } from '@mui/material/styles';
import '../App.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormsComponents from '../components/FormInput/FormsComponents';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#5584AC' : '#22577E',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function AdminCRUD() {

    return (
    <div>
        <NavBar/>
        <Avatar/>
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={4} columnSpacing={3}>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={4}>
                    <Item><ImageGrid/></Item>
                </Grid>
                <Grid item xs={4}>
                    <Item><FormsComponents/></Item>
                </Grid>
                
            </Grid>

        </Box>

    </div>
    
    
    
    
    
    )

}

export default AdminCRUD