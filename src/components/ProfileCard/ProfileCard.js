import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import './ProfileCard.css';
import {queries} from '../../utils/queries';


function bools_to_strings(pet) {
    for (var key in pet) {
        if (key == 'good_with_animals' || key == 'good_with_children' || key == 'must_be_leashed') {
            if (pet[key] == true) {
                pet[key] = 'yes';
            } else {
                pet[key] = 'no';
            }
        }
    }
}

function button_html(pet) {
    if (pet.availability != 'Available') {
        return <Button variant='contained' disabled>ADOPT</Button>
    }
    return <Button variant='contained'>ADOPT</Button>
}

function ProfileCard({petData}) {
    var petInfo = petData.data;
    bools_to_strings(petInfo);
    const button = button_html(petInfo);
    return (
        <div className='profile-card'>
            <Card sx={{width: 400, background: "rgba(255, 255, 255, 1.0)", m: "20px"}}>
                <CardHeader title={petInfo.name} subheader={petInfo.breed} />
                <CardContent classes='pet-content'> 
                    <div className='card-content'>
                        <p><b>Age: </b>{petInfo.age} {petInfo.age_descriptor}</p> 
                        <p><b>Date Added: </b>{petInfo.date_created}</p>
                        <p><b>Good with animals: </b>{String(petInfo.good_with_animals)}</p>
                        <p><b>Good with Children: </b>{String(petInfo.good_with_children)}</p>
                        <p><b>Must be leashed: </b>{String(petInfo.must_be_leashed)}</p>
                        <p><b>Description: </b>{petInfo.description}</p>
                        <p><b>Status: </b>{petInfo.availability}</p>
                    </div>
                </CardContent>
                <CardActions>
                    {button}
                </CardActions>
            </Card>
        </div>
    )
}

export default ProfileCard;