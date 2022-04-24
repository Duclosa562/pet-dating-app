import NavBar from '../components/NavBar/NavBar';
import ImageAvatar from '../components/ImageAvatar/ImageAvatar.js';
import ImageAvatarCrud from '../components/ImageAvatar/ImageAvatarCrudCard';
import ImageGrid from '../components/ImageGrid/ImageGrid';
import UploadPhoto from '../components/UploadPhotoButton/UploadPhoto'
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
import AdminCrudCard from '../components/AdminCrudCard/AdminCrudCard';
import Stack from '@mui/material/Stack';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#5584AC' : '#22577E',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function AdminCRUD() {

    return (
    <div>
        <NavBar/>
        <Grid container columnSpacing={1}>
            <Grid item xs={1}>
            </Grid>
            <Grid item container xs={3} 
                    direction="column"
                    alignItems="center"
                    justifyContent="center">
                        <Stack>
                        <Box >
                            <ImageAvatarCrud></ImageAvatarCrud>
                        </Box>
                        <Box >
                            <UploadPhoto></UploadPhoto>
                        </Box>
                        </Stack>
            </Grid>
            <Grid item container xs={7}>
                <Box sx={{ }}>
                    <AdminCrudCard></AdminCrudCard>
                </Box>
            </Grid>
            <Grid item container xs={1}></Grid>
        </Grid>
    </div>
    
    )

}

export default AdminCRUD