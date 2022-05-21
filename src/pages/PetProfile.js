import { useLocation } from 'react-router-dom';
 
import Grid from '@mui/material/Grid';

import ImageAvatar from '../components/ImageAvatar/ImageAvatar';
import NavBar from '../components/NavBar/NavBar';
import ProfileCard from '../components/ProfileCard/ProfileCard';

import pokeImage from "../images/fuecoco.png";

import "../styles/PetProfile.css";

function PetProfile() {
    const location = useLocation();
    const data = location.state;
    console.log('PetProfile page');
    console.log('data:');
    console.log(data);
    console.log('image?');
    //console.log(data.data.image);  // confirmed this is correct
    return (
        <div className="pet-profile">
            <div className="pet-data">
                <Grid container columns={2} direction='row' alignItems='center' justifyContent='center'>
                    <ImageAvatar image={data.data.image} />
                    <ProfileCard petData={data}/>
                </Grid>
            </div>
            
        </div>
    )
}

export default PetProfile;

// did not work
// div alignItems='center' on both divs