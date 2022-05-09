import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import './ProfileCard.css';

function ProfileCard({petData}) {
    const petInfo = petData.data;
    return (
        <div className='profile-card'>
            <Card >
                <CardHeader title={petInfo.name} subheader={petInfo.breed} />
                <CardContent classes='pet-content'> 
					<div>Age: {petInfo.age} {petInfo.age_descriptor} old</div> 
                    <div>Status: {petInfo.availability}</div>
                    <div>Date Added: {petInfo.date_created}</div>
                    <div>
                        <ul>Disposition:
                            <li>Good with other animals</li>
                            <li>Good with Children</li>
                            <li>Animal must be leased at all times</li>
                    </ul></div>
                    <div>Description: {petInfo.description}</div>
                </CardContent>
                <CardActions>
                    <Button variant='contained'>ADOPT NOW</Button>
                </CardActions>
                
            </Card>
        </div>
    )
}

export default ProfileCard;