import Grid from '@mui/material/Grid';

import ImageAvatar from '../components/ImageAvatar/ImageAvatar';
import NavBar from '../components/NavBar/NavBar';
import ProfileCard from '../components/ProfileCard/ProfileCard';

import pokeImage from "../images/fuecoco.png";

import "../styles/PetProfile.css";

function PetProfile() {
    return (
        <div className="pet-profile">
            <NavBar />
            <div className="pet-data">
                <Grid container columns={2} direction='row' alignItems='center' justifyContent='center'>
                    <ImageAvatar imagePath={pokeImage} />
                    <ProfileCard />
                </Grid>
            </div>
            
        </div>
    )
}

export default PetProfile;