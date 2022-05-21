import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import './ProfileCard.css';
import { CardMedia } from '@mui/material';

function ProfileCard({petData}) {
    const petInfo = petData.data;
    return (
        <div className='profile-card'>
            <Card sx={{width: 400, background: "rgba(255, 255, 255, 1.0)", m: "20px"}}>
                
                <CardHeader title={petInfo.name} subheader={petInfo.breed} />
                <CardContent classes='pet-content'> 
                    <div className='card-content'>
                        <h5>Age: {petInfo.age} {petInfo.age_descriptor}</h5> 
                        <h5>Status: {petInfo.availability}</h5>
                        <h5>Date Added: {petInfo.date_created}</h5>
                        <h5>Good with animals: {petInfo.good_with_other_animals}</h5>
                        <h5>Good with Children: {petInfo.good_with_children}</h5>
                        <h5>Must be leashed: {petInfo.animal_must_be_leashed}</h5><br></br>
                        <h5>Description:</h5><div>{petInfo.description}</div><br></br>
                    </div>
                </CardContent>
                <CardActions>
                    <Button variant='contained'>ADOPT</Button>
                </CardActions>
                
            </Card>
        </div>
    )
}

export default ProfileCard;