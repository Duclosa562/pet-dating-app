import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import './ProfileCard.css';

function ProfileCard() {
    let tempDesc = "This is a template and a pokemon. Actual description from database to be placed here.";
    return (
        <div className='profile-card'>
            <Card >
                <CardHeader title='Fuecoco' subheader='Pokemon' />
                <CardContent classes='pet-content'> 
                    <div>Status: Available</div>
                    <div>Date Added: 04-18-2022</div>
                    <div>Breed: FireType</div>
                    <div>
                        <ul>Disposition:
                            <li>Good with other animals</li>
                            <li>Good with Children</li>
                            <li>Animal must be leased at all times</li>
                    </ul></div>
                    <div>Description: {tempDesc}</div>
                </CardContent>
                <CardActions>
                    <Button variant='contained'>ADOPT NOW</Button>
                </CardActions>
                
            </Card>
        </div>
    )
}

export default ProfileCard;