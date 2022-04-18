import Avatar from '@mui/material/Avatar';
import ImageAvatar from '../components/ImageAvatar/ImageAvatar';
import NavBar from '../components/NavBar/NavBar';

function PetProfile() {
    return (
        <div className="pet-profile">
            <NavBar />
            <Avatar alt='Fuecoco' src= './images/fuecoco.png'/>
            <ImageAvatar />
        </div>
    )
}

export default PetProfile;